class Switcher {
    constructor() {
        this.lamp = {}
        this.conecStatus = false;
    }
    conecToLamp(obj) {
        this.lamp = obj;
        this.status = true;
    }
    getStatus(lamp) {
        if (this.status) {
            document.writeln(lamp.name)
            document.writeln(lamp.status)
        }
    }
    turnOn1(lamp) {
        if (this.status) {
            lamp.turnOn()
            this.getStatus()
        }
    }
    turnOff2(lamp) {
        if (this.status) {
            lamp.turnOff()
            this.getStatus();
        }
    }

}
let switcher = new Switcher();
let lamp = new ElectricLamp("kawa")

switcher.conecToLamp(lamp)
switcher.turnOn1()
switcher.turnOff2()
