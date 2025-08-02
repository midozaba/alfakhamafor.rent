class Car {
  constructor(ser, Car_Num, Type, Group, Color, Model, Car_Case) {
    this.ser = ser;
    this.Car_Num = Car_Num;
    this.Type = Type;
    this.Group = Group;
    this.Color = Color;
    this.Model = Model;
    this.Car_Case = Car_Case;
  }

  start() {
    console.log(`${this.ser} ${this.Car_Num} ${this.Type} ${this.Group} ${this.Color} \
        ${this.Model} ${this.Car_Case} is starting...`);
  }

  getCardText() {
    return `\n----- Car Card -----\n` +
      `الرقم التسلسلي: ${this.ser}\n` +
      `رقم السيارة: ${this.Car_Num}\n` +
      `النوع: ${this.Type}\n` +
      `المجموعة: ${this.Group}\n` +
      `اللون: ${this.Color}\n` +
      `الموديل: ${this.Model}\n` +
      `الحالة: ${this.Car_Case}`;
  }
}

document.getElementById('carForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const ser = document.getElementById('ser').value;
  const Car_Num = document.getElementById('Car_Num').value;
  const Type = document.getElementById('Type').value;
  const Group = document.getElementById('Group').value;
  const Color = document.getElementById('Color').value;
  const Model = document.getElementById('Model').value;
  const Car_Case = document.getElementById('Car_Case').value;
  // Create Car object with all details
  const userCar = new Car(ser, Car_Num, Type, Group, Color, Model, Car_Case);
  // Log all car details
  console.log('--- Car Details ---');
  console.log('Serial:', ser);
  console.log('Car Number:', Car_Num);
  console.log('Type:', Type);
  console.log('Group:', Group);
  console.log('Color:', Color);
  console.log('Model:', Model);
  console.log('Case:', Car_Case);
  userCar.start();
  // Show car card text (like the card info on the site)
  console.log(userCar.getCardText());
});


