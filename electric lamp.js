class ElectricLamp {
    constructor(name) {
        this.name = name;
        this.status = false;
    }
    turnOn() {
        if (this.status) {
            document.writeln("đang sáng rồi mà")
        } else {
            document.writeln("đèn đã được bật")
            this.status = true;
        }
    }
    turnOff() {
        if (this.status) {
            document.writeln("đèn đã được tắt")

        } else {
            document.writeln("Đang sáng rồi mà")
        }
    }
}
let lamp = new ElectricLamp("kawa")


