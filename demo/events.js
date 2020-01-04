const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('anything', data => {
    console.log('data on anything', data);
})

emitter.emit('anything', {a:1});
setTimeout(()=>{
    emitter.emit('anything', {c:3});
}, 2000)
emitter.emit('anything', {b:2});


setTimeout(()=>{
    emitter.emit('anything', {d:4});
}, 4000)

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb){
        console.log('subsctibe...');
        this.on(eventName, cb)
    }

    dispatch(eventName, data){
        console.log('dispatch...');
        this.emit(eventName, data)
    }
}

const disp=new Dispatcher();
disp.subscribe('someEvent', data=>{
    console.log('on: someEvent', data );
})

disp.dispatch('someEvent', {data: 'message from event'})