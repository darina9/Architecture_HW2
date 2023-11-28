// Подсистема 1
class Subsystem1 {
    method1() {
      console.log('Subsystem1: Method 1');
    }
  
    method2() {
      console.log('Subsystem1: Method 2');
    }
  }
  
  // Подсистема 2
  class Subsystem2 {
    methodA() {
      console.log('Subsystem2: Method A');
    }
  
    methodB() {
      console.log('Subsystem2: Method B');
    }
  }
  
  // Фасад
  class Facade {
    constructor() {
      this.subsystem1 = new Subsystem1();
      this.subsystem2 = new Subsystem2();
    }
  
    // Методы фасада делегируют вызовы соответствующим методам подсистем
    operation1() {
      this.subsystem1.method1();
      this.subsystem2.methodA();
    }
  
    operation2() {
      this.subsystem1.method2();
      this.subsystem2.methodB();
    }
  
    // Дополнительные методы фасада, если нужно
    operation3() {
      console.log('Facade: Operation 3');
    }
  }
  
  // Пример использования
  function clientCode() {
    const facade = new Facade();
  
    // Клиент взаимодействует с фасадом, вызывая его методы
    facade.operation1();
    facade.operation2();
    facade.operation3(); // Дополнительный метод фасада
  }
  
  // Запуск клиентского кода
  clientCode();
  