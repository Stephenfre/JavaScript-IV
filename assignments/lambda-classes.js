// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location} `;
  }
}

class Instructor extends Person {
  constructor(instrucTraits) {
    super(instrucTraits);
    this.specialty = instrucTraits.specialty;
    this.favLanguage = instrucTraits.favLanguage;
    this.catchPhrase = instrucTraits.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studTrait) {
    super(studTrait);
    this.previousBackground = studTrait.previousBackground;
    this.className = studTrait.className;
    this.favSubjects = studTrait.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects.forEach(subject => console.log(`${subject}`));
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun the sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmInfo) {
    super(pmInfo);
    this.gradClassName = pmInfo.gradClassName;
    this.favInstructor = pmInfo.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to @${channel}, stand up time.`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// Instructors //

const ironMan = new Instructor({
  name: "Tony Starks",
  location: "Long Island",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Back-end",
  catchPhrase: `I... AM... IRONMAN!`
});

const captainAmerica = new Instructor({
  name: "Steve Rodgers",
  location: "Brooklyn",
  age: 80,
  favLanguage: "Python",
  specialty: "Front-end",
  catchPhrase: `I can do this all day!`
});

const hulk = new Instructor({
  name: "Bruce Banner",
  location: "Dayton",
  age: 80,
  favLanguage: "Python",
  specialty: "Redux",
  catchPhrase: `You dont want me to get angry!!!`
});

// Students //

const spiderMan = new Student({
  name: "Peter Parker",
  location: "Queens",
  age: 17,
  previousBackground: "Highschool Graduate",
  className: "FS123",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const winterSoldier = new Student({
  name: "Bucky",
  location: "Brooklyn",
  age: 80,
  previousBackground: "Secret Agent for HYDRA",
  className: "UI123",
  favSubjects: ["React", "LESS", "Java"]
});

const sheHulk = new Student({
  name: "Jennifer Walters",
  location: "Los Angeles",
  age: 39,
  previousBackground: "Sheirff",
  className: "R123",
  favSubjects: ["Redux", "Python", "JavaScript"]
});

// Project Managers //

const thor = new ProjectManager({
  name: "Thor",
  location: "Asgard",
  age: 200,
  gradClassName: "CS1",
  favInstructor: "Bruce Banner"
});

const blackPanther = new ProjectManager({
  name: "TChalla",
  location: "Wakanda",
  age: 52,
  gradClassName: "WF5",
  favInstructor: "Tony Starks"
});

const antMan = new ProjectManager({
  name: "Scott Lang",
  location: "Coral Gables",
  age: 40,
  gradClassName: "PP1",
  favInstructor: "Steve Rodger"
});

// <<<<<< Instructor Methods >>>>>> //

console.log(ironMan.speak());
console.log(ironMan.demo("Data Structures"));
console.log(ironMan.grade(spiderMan, "JavaScript"));

console.log(captainAmerica.speak());
console.log(captainAmerica.demo("LESS"));
console.log(captainAmerica.grade(winterSoldier, "React"));

console.log(hulk.speak());
console.log(hulk.demo("Python"));
console.log(hulk.grade(sheHulk, "Python"));

// <<<<<< Students Methods >>>>>> //

console.log(spiderMan.speak());
console.log(spiderMan.listsSubjects());
console.log(spiderMan.PRAssignment("JavaScript"));
console.log(spiderMan.sprintChallenge("JavaScript"));

console.log(winterSoldier.speak());
console.log(winterSoldier.listsSubjects());
console.log(winterSoldier.PRAssignment("Java"));
console.log(winterSoldier.sprintChallenge("Java"));

console.log(sheHulk.speak());
console.log(sheHulk.listsSubjects());
console.log(sheHulk.PRAssignment("Python"));
console.log(sheHulk.sprintChallenge("Python"));

// <<<<<< Project Manager Methods >>>>>> //

console.log(thor.speak());
console.log(thor.standUp("CS1"));
console.log(thor.debugsCode(spiderMan, "JavaScript"));

console.log(blackPanther.speak());
console.log(blackPanther.standUp("UI123"));
console.log(blackPanther.debugsCode(winterSoldier, "Java"));

console.log(antMan.speak());
console.log(antMan.standUp("R123"));
console.log(antMan.debugsCode(sheHulk, "Redux"));
