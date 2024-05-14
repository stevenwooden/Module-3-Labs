class DigitalClock{

    constructor(prefix) {
        this.prefix= prefix;
    }

    display(){
        let date = new Date();
        let [hours,min,secs] = [date.getHours(), date.getMinutes(),date.getSeconds()];

        if (hours < 10) hours = '0' + hours;
        if (min < 10) min = '0' + min;
        if (secs< 20) secs = '0' + secs;

        console.log(`${this.prefix} ${hours}:${min}:${secs}`)
    }
    
    stop(){
        clearInterval(this.timer);
    }

    start(){
        this.display();
        this.timer = setInterval(() => this.display(),1000)
    }
}
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}
class AlarmClock extends DigitalClock {
    constructor( prefix, wakeUpTime = '07:00'){
        super(prefix);
        this.wakeUpTime = wakeUpTime;
        this.alarmSet = false;
    }
    display() {
        super.display();
        if (!this.alarmSet) {
            let date = new Date();
            let hours = date.getHours();
            let mins = date.getMinutes();
            let currentTime = `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`;
            if (currentTime === this.wakeUpTime) {
                console.log('Wake Up!!!!');
                this.stop();
            }
        }
    }
}

const myClock = new DigitalClock('my clock: ')
const myPreci = new PrecisionClock('precision clock: ', 500)
const myAlarm = new AlarmClock('alarm clock: ', '08:00')
myClock.start() 
myPreci.start()
myAlarm.start()