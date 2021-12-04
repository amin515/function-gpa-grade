let name = prompt(`Your name`);
let roll = parseInt(prompt('Your Roll'));

let bn = parseInt(prompt('Bangla'));
let en = parseInt(prompt('English'));
let math = parseInt(prompt('Math'));
let s = parseInt(prompt('Science'));
let ss = parseInt(prompt('Social-Science'));
let rel = parseInt(prompt('Religion'));




console.log(`

Your Name               :    ${name}
Your roll number        :    ${roll}

Subject                  Mark                      Gpa                   Grade

Bangla                   :   ${bn}                 ${gpa(bn)}            ${grade(bn)}
English                  :   ${en}                 ${gpa(en)}            ${grade(en)}
Math                     :   ${math}               ${gpa(math)}          ${grade(math)}
Science                  :   ${s}                  ${gpa(s)}             ${grade(s)}
Social                   :   ${ss}                 ${gpa(ss)}            ${grade(ss)}
Religion                 :   ${rel}                ${gpa(rel)}           ${grade(rel)}
---------------------------------------------------------------
                                        cgpa = ${cgpa( gpa(bn), gpa(en), gpa(math),
                                              gpa(s), gpa(ss), gpa(rel))}
 

`)