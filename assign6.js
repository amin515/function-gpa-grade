



let gpa = (mark) =>{
    let gpa;
  if (mark >= 0 && mark <= 32){
      gpa = 0;
  }else if(mark >= 33 && mark < 40){
      gpa = 1;
  }else if(mark >= 40 && mark < 50){
      gpa = 2;
  }else if(mark >= 51 && mark < 60){
      gpa = 3;
  }else if(mark >= 61 && mark < 70){
      gpa = 3.5;
  }else if(mark >= 71 && mark < 80){
      gpa = 4;
  }else if(mark >= 81 && mark < 100){
      gpa = 5;
  }return gpa;
  
  }
  
  let grade = (mark) =>{
    let grade;
  if (mark >= 0 && mark <= 32){
      grade = ' F ';
  }else if(mark >= 33 && mark < 40){
      grade = ' D ';
  }else if(mark >= 40 && mark < 50){
      grade = ' C ';
  }else if(mark >= 50 && mark < 60){
      grade = 'B';
  }else if(mark >= 60 && mark < 70){
      grade = 'A-';
  }else if(mark >= 70 && mark < 80){
      grade = 'A';
  }else if(mark >= 80 && mark <= 100){
      grade = 'A+';
  }return grade;
  
  }
  
  // cgpa calculator
  
  let cgpa = (bn, en, math, s, ss, rel) =>{
  
      let total_cgpa = (bn + en + math + s + ss + rel)
  
  let cgpa = (total_cgpa / 6);
  
  
  if(bn== 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0){
      return ` You are failed`
     }else{
         return `Your total cgpa = ${cgpa.toFixed(2)} & total grade = ${totalGrade(cgpa)}`
     }
  }
  
  
  
  
  // total grade calculator
  
  function totalGrade (cgpa){
  if( cgpa >= 0 && cgpa < 1){
      return `F`
  }else if( cgpa >= 1 && cgpa < 2){
      return `D`
  }else if( cgpa >= 2 && cgpa < 3){
      return `C`
  }else if( cgpa >= 3.5 && cgpa < 4){
      return `B`
   }else if(cgpa >= 4 && cgpa < 5){
     return `A`
   }else if(cgpa == 5){
  return `A+`
   }
  
  };

  
  
  