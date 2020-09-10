import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { WindowRef } from 'src/app/providers/window-ref';

//import { WSAvcPlayer } from 'libs/WSAvcPlayer.js';
import WSAvcPlayer from 'libs/WSAvcPlayer.min.js';

export interface ICameraSettings {
  height: number;
  width: number;
}

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @Input('id') id: string = "id";
  @Input('ip') ip: string = "0.0.0.0";
  @Input('port') port: number;

  @Input('settings') settings: ICameraSettings = { height: 480, width: 640 };

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;

  constructor(
    private windowRef: WindowRef
  ) { }

  ngOnInit() {

    console.log()

    // Create h264 player
    console.log("Current canvas: ", this.canvas);
    var wsavc = new WSAvcPlayer(this.canvas.nativeElement, "webgl", 1, 35);

    //expose instance for button callbacks
    let natWindowsInstance = this.windowRef.nativeWindow;
    natWindowsInstance.wsavc = wsavc;
    //window.wsavc = wsavc;

    var uri = "ws://192.168.2.68:8179/"
    wsavc.connect(uri);

    //wsavc.on('message', m=>console.log(m))

    wsavc.on('disconnected', () => console.log('WS Disconnected'))
    wsavc.on('connected', () => console.log('WS connected'))
    wsavc.on('frame_shift', (fbl) => { })

    wsavc.on('initalized', (payload) => console.log('Initialized', payload))
    wsavc.on('stream_active', active => console.log('Stream is ', active ? 'active' : 'offline'))
    wsavc.on('custom_event_from_server', event => console.log('got event from server', event))
    wsavc.on('resized', (payload) => console.log('resized', payload))

  }

}
