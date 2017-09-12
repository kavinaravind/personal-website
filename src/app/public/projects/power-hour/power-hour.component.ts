import { Component, OnInit, ViewChild, ElementRef, Input, NgZone } from '@angular/core';
import { Circle } from './circle';

@Component({
    selector: 'app-power-hour',
    templateUrl: './power-hour.component.html',
    styleUrls: ['./power-hour.component.css']
})
export class PowerHourComponent implements OnInit {

    @ViewChild('myCanvas') canvasRef: ElementRef;
    @ViewChild('myAudio') audio: ElementRef;

    circles: Circle[] = [];
    analyser: any;
    ctx: CanvasRenderingContext2D;
    random = Math.random;

    constructor(private ngZone: NgZone) { }

    ngOnInit() {

        this.ctx = this.canvasRef.nativeElement.getContext('2d');        

        this.setupWebAudio();

        let x;
        let y;
        let radius;
        let color;

        for (var i = 0; i < 20; i++) {
            x = this.random() * this.canvasRef.nativeElement.width;
            y = this.random() * this.canvasRef.nativeElement.height;
            radius = this.random() * 100 + 50;
            color = 'rgb(' + this.getRandomColor() + ',' + 0 + ',' + this.getRandomColor() + ')';
            this.circles[i] = new Circle(x, y, radius, color);
            this.drawCircle(this.circles[i]);
        }
        this.ngZone.runOutsideAngular(() => this.draw());
    }

    setupWebAudio() {

        this.audio.nativeElement.crossOrigin = 'anonymous';
        this.audio.nativeElement.controls = true;
        this.audio.nativeElement.loop = false;
        this.audio.nativeElement.autoplay = false;

        let audioContext = new AudioContext();
        this.analyser = audioContext.createAnalyser();
        let source = audioContext.createMediaElementSource(<HTMLMediaElement>this.audio.nativeElement);
        source.connect(this.analyser);
        this.analyser.connect(audioContext.destination);
        this.audio.nativeElement.play();
    }

    getRandomColor() {
        return this.random() * 255 >> 0;
    }

    draw() {
        requestAnimationFrame((this.draw.bind(this)));
        let freqByteData = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(freqByteData);
        this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

        for (var i = 1; i < this.circles.length; i++) {
            this.circles[i].radius = freqByteData[i] * 2;
            this.circles[i].y = this.circles[i].y > this.canvasRef.nativeElement.height ? 0 : this.circles[i].y + 1;
            this.drawCircle(this.circles[i]);            
        }

        for (var i = 1; i < freqByteData.length; i++) {
            this.ctx.fillStyle = 'rgb(' + this.getRandomColor() + ',' + 0 + ',' + this.getRandomColor() + ')';
            this.ctx.fillRect(i, this.canvasRef.nativeElement.height - freqByteData[i] * 3, 1, this.canvasRef.nativeElement.height);
            this.ctx.strokeRect(i, this.canvasRef.nativeElement.height - freqByteData[i] * 3, 1, this.canvasRef.nativeElement.height);
        }
    }

    drawCircle(circle: Circle) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.globalAlpha = this.random() / 3 + 0.2;
        this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = circle.color;
        this.ctx.fill();
        this.ctx.restore();
    }
}