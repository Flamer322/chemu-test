import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { ChatService } from '../chat/chat.service';
import { MessageService } from '../message/message.service';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  clients = {};

  constructor(
    private chatService: ChatService,
    private messageService: MessageService,
  ) {}

  afterInit(server: any): any {
    this.server = server;
  }

  @SubscribeMessage('user')
  handleUser(client: Socket, data: { userId: number }) {
    console.log(client.id, data.userId);
    this.clients[data.userId] = client.id;
  }

  @SubscribeMessage('chat')
  async handleChat(client: Socket, data: { userIds: number[] }) {
    console.log(data);

    const chat = await this.chatService.save(data.userIds);

    data.userIds.forEach((userId) => {
      this.server.to('user' + userId).emit('chat', chat);
    });
  }

  @SubscribeMessage('message')
  async handleMessage(
    client: Socket,
    data: { chatId: number; senderId: number; text: string },
  ) {
    console.log(data);

    const message = await this.messageService.save(
      data.chatId,
      data.senderId,
      data.text,
    );

    message.chat.users.forEach((user) => {
      console.log('user' + user.id);
      this.server.to('user' + user.id).emit('message', {
        chat_id: message.chat.id,
        message: {
          id: message.id,
          chat_id: message.chat.id,
          text: message.text,
          sender: message.sender,
          created_at: message.created_at,
        },
      });
    });
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, userId: number) {
    console.log('user' + userId + ' joined room');
    client.join('user' + userId);
  }
}
