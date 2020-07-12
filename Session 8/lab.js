// //Bai 1
// let count = 0;
// const number = document.getElementById("count");
// const btn_increase = document.getElementById("btn_add");
// const btn_decrease = document.getElementById('btn_minus');

// btn_increase.addEventListener('click', function () {
//     count++;
//     number.innerHTML = count;
// })

// btn_decrease.addEventListener('click', function () {
//     count--;
//     number.innerHTML = count;
// })

// //Bai 2

// const btn_start = document.getElementById('btn_start');
// const btn_stop = document.getElementById('btn_stop');
// let current_timer = document.getElementById('time_remaining');
// btn_start.addEventListener('click', function () {
//     //  let current_timer = current.innerHTML;
//     const timer = document.getElementById('timer').value;
//     current_timer.innerHTML = timer;
//     let timer_count = setInterval(() => {
//         current_timer.innerHTML = current_timer.innerHTML - 1;
//         console.log(current_timer.innerHTML)
//         if (current_timer.innerHTML == 0) {
//             clearInterval(timer_count);
//         }
//     }, 1000);  
//     btn_stop.addEventListener('click',function(){
//         clearInterval(timer_count);
//         current_timer.innerHTML = 'Stopped'
//     })
// })


//Bai 3: 
let quote_data = [{
    "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
}, {
    "quoteText": "You can observe a lot just by watching.",
    "quoteAuthor": "Yogi Berra"
}, {
    "quoteText": "A house divided against itself cannot stand.",
    "quoteAuthor": "Abraham Lincoln"
}, {
    "quoteText": "Difficulties increase the nearer we get to the goal.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
}, {
    "quoteText": "Fate is in your hands and no one elses",
    "quoteAuthor": "Byron Pulsifer"
}, {
    "quoteText": "Be the chief but never the lord.",
    "quoteAuthor": "Lao Tzu"
}, {
    "quoteText": "Nothing happens unless first we dream.",
    "quoteAuthor": "Carl Sandburg"
}, {
    "quoteText": "Well begun is half done.",
    "quoteAuthor": "Aristotle"
}, {
    "quoteText": "Life is a learning experience, only if you learn.",
    "quoteAuthor": "Yogi Berra"
}, {
    "quoteText": "Self-complacency is fatal to progress.",
    "quoteAuthor": "Margaret Sangster"
}, {
    "quoteText": "Peace comes from within. Do not seek it without.",
    "quoteAuthor": "Buddha"
}, {
    "quoteText": "What you give is what you get.",
    "quoteAuthor": "Byron Pulsifer"
}, {
    "quoteText": "We can only learn to love by loving.",
    "quoteAuthor": "Iris Murdoch"
}, {
    "quoteText": "Life is change. Growth is optional. Choose wisely.",
    "quoteAuthor": "Karen Clark"
}, {
    "quoteText": "You'll see it when you believe it.",
    "quoteAuthor": "Wayne Dyer"
}, {
    "quoteText": "Today is the tomorrow we worried about yesterday.",
    "quoteAuthor": ""
}, {
    "quoteText": "It's easier to see the mistakes on someone else's paper.",
    "quoteAuthor": ""
}, {
    "quoteText": "Every man dies. Not every man really lives.",
    "quoteAuthor": ""
}, {
    "quoteText": "To lead people walk behind them.",
    "quoteAuthor": "Lao Tzu"
}, {
    "quoteText": "Having nothing, nothing can he lose.",
    "quoteAuthor": "William Shakespeare"
}, {
    "quoteText": "Trouble is only opportunity in work clothes.",
    "quoteAuthor": "Henry J. Kaiser"
}, {
    "quoteText": "A rolling stone gathers no moss.",
    "quoteAuthor": "Publilius Syrus"
}, {
    "quoteText": "Ideas are the beginning points of all fortunes.",
    "quoteAuthor": "Napoleon Hill"
}, {
    "quoteText": "Everything in life is luck.",
    "quoteAuthor": "Donald Trump"
}, {
    "quoteText": "Doing nothing is better than being busy doing nothing.",
    "quoteAuthor": "Lao Tzu"
}, {
    "quoteText": "Trust yourself. You know more than you think you do.",
    "quoteAuthor": "Benjamin Spock"
}, {
    "quoteText": "Study the past, if you would divine the future.",
    "quoteAuthor": "Confucius"
}, {
    "quoteText": "The day is already blessed, find peace within it.",
    "quoteAuthor": ""
}, {
    "quoteText": "From error to error one discovers the entire truth.",
    "quoteAuthor": "Sigmund Freud"
}, {
    "quoteText": "Well done is better than well said.",
    "quoteAuthor": "Benjamin Franklin"
}, {
    "quoteText": "Bite off more than you can chew, then chew it.",
    "quoteAuthor": "Ella Williams"
}, {
    "quoteText": "Work out your own salvation. Do not depend on others.",
    "quoteAuthor": "Buddha"
}, {
    "quoteText": "One today is worth two tomorrows.",
    "quoteAuthor": "Benjamin Franklin"
}, {
    "quoteText": "Once you choose hope, anythings possible.",
    "quoteAuthor": "Christopher Reeve"
}, {
    "quoteText": "God always takes the simplest way.",
    "quoteAuthor": "Albert Einstein"
}, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
}, {
    "quoteText": "From small beginnings come great things.",
    "quoteAuthor": ""
}, {
    "quoteText": "Learning is a treasure that will follow its owner everywhere",
    "quoteAuthor": "Chinese proverb"
}, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
}, {
    "quoteText": "The world is always in movement.",
    "quoteAuthor": "V. Naipaul"
}, {
    "quoteText": "Never mistake activity for achievement.",
    "quoteAuthor": "John Wooden"
}, {
    "quoteText": "What worries you masters you.",
    "quoteAuthor": "Haddon Robinson"
}, {
    "quoteText": "One faces the future with ones past.",
    "quoteAuthor": "Pearl Buck"
}, {
    "quoteText": "Goals are the fuel in the furnace of achievement.",
    "quoteAuthor": "Brian Tracy"
}, {
    "quoteText": "Who sows virtue reaps honour.",
    "quoteAuthor": "Leonardo da Vinci"
}, {
    "quoteText": "Be kind whenever possible. It is always possible.",
    "quoteAuthor": "Dalai Lama"
}, {
    "quoteText": "Talk doesn't cook rice.",
    "quoteAuthor": "Chinese proverb"
}, {
    "quoteText": "He is able who thinks he is able.",
    "quoteAuthor": "Buddha"
}, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
}, {
    "quoteText": "A goal without a plan is just a wish.",
    "quoteAuthor": "Larry Elder"
}, {
    "quoteText": "To succeed, we must first believe that we can.",
    "quoteAuthor": "Michael Korda"
}, {
    "quoteText": "Learn from yesterday, live for today, hope for tomorrow.",
    "quoteAuthor": "Albert Einstein"
}, {
    "quoteText": "A weed is no more than a flower in disguise.",
    "quoteAuthor": "James Lowell"
}, {
    "quoteText": "Do, or do not. There is no try.",
    "quoteAuthor": "Yoda"
}, {
    "quoteText": "All serious daring starts from within.",
    "quoteAuthor": "Harriet Beecher Stowe"
}, {
    "quoteText": "The best teacher is experience learned from failures.",
    "quoteAuthor": "Byron Pulsifer"
}, {
    "quoteText": "Think how hard physics would be if particles could think.",
    "quoteAuthor": "Murray Gell-Mann"
}, {
    "quoteText": "Love is the flower you've got to let grow.",
    "quoteAuthor": "John Lennon"
}, {
    "quoteText": "Don't wait. The time will never be just right.",
    "quoteAuthor": "Napoleon Hill"
}, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
}, {
    "quoteText": "Time is the wisest counsellor of all.",
    "quoteAuthor": "Pericles"
}, {
    "quoteText": "You give before you get.",
    "quoteAuthor": "Napoleon Hill"
}, {
    "quoteText": "Wisdom begins in wonder.",
    "quoteAuthor": "Socrates"
}, {
    "quoteText": "Without courage, wisdom bears no fruit.",
    "quoteAuthor": "Baltasar Gracian"
}, {
    "quoteText": "Change in all things is sweet.",
    "quoteAuthor": "Aristotle"
}, {
    "quoteText": "What you fear is that which requires action to overcome.",
    "quoteAuthor": "Byron Pulsifer"
}]
// let btn_restart = document.getElementById('btn_restart');
// let quote_content = document.getElementById('quote_content');
// let quote_author = document.getElementById('quote_author')
// btn_restart.addEventListener('click', function () {
//     let shuffle_quote = quote_data[Math.floor(Math.random() * quote_data.length)];
//     console.log(shuffle_quote);
//     quote_content.innerHTML = shuffle_quote.quoteText;
//     quote_author.innerHTML = shuffle_quote.quoteAuthor;
// })

// //Bai 4:

// let timeSheetData = [{
//         'project': 'Learn front-end',
//         'task': 'Learn HTML',
//         'time_spent': 6,
//     }, {
//         'project': 'Learn front-end',
//         'task': 'Learn CSS',
//         'time_spent': 8,
//     }, {
//         'project': 'Learn front-end',
//         'task': 'Learn JS Variables and Data Types',
//         'time_spent': 6,
//     },
//     {
//         'project': 'Learn git',
//         'task': 'Learn git basics',
//         'time_spent': 2,
//     },
// ]

// console.log(timeSheetData);
// let time_sheet = document.getElementById("time_sheet");

// for (let i = 0; i < timeSheetData.length; i++) {
//     let row0 = time_sheet.insertRow(-1);

//     let cell0_1 = row0.insertCell(-1);
//     let cell0_2 = row0.insertCell(-1);
//     let cell0_3 = row0.insertCell(-1);
//     let cell0_4 = row0.insertCell(-1);

//     cell0_1.innerHTML = timeSheetData[i].project;
//     cell0_2.innerHTML = timeSheetData[i].task;
//     cell0_3.innerHTML = timeSheetData[i].time_spent;
//     cell0_4.innerHTML = "<button id='delete_" + i + "'>delete</button>";

// }


// let tbody = document.getElementsByTagName('tbody');
// console.log(tbody);

// let input_project = document.getElementById('input_project');
// let input_task = document.getElementById('input_task');
// let input_time = document.getElementById('input_time');
// let btn_add = document.getElementById('btn_add');
// let deleteId_count = 5;
// btn_add.addEventListener('click', () => {
//     let newObj = {
//         'project': input_project.value,
//         'task': input_task.value,
//         'time_spent': Number(input_time.value),
//     }
//     timeSheetData.push(newObj);
//     console.log(timeSheetData)
//     let row4 = time_sheet.insertRow(-1);

//     let cell4_1 = row4.insertCell(-1);
//     let cell4_2 = row4.insertCell(-1);
//     let cell4_3 = row4.insertCell(-1);
//     let cell4_4 = row4.insertCell(-1);

//     cell4_1.innerHTML = timeSheetData[timeSheetData.length - 1].project;
//     cell4_2.innerHTML = timeSheetData[timeSheetData.length - 1].task;
//     cell4_3.innerHTML = timeSheetData[timeSheetData.length - 1].time_spent;
//     cell4_4.innerHTML = "<button id='delete" + deleteId_count + "'>delete</button>";
//     let btnDelete = document.getElementById('delete'+deleteId_count);
//     btnDelete.addEventListener('click', function () {
//         time_sheet.deleteRow(-1);
//     })
//     deleteId_count++;

// })

// for (let i = 0; i < timeSheetData.length; i++) {
//     let btn_delete = document.getElementById('delete_' + i);
//     btn_delete.addEventListener('click', function () {
//         time_sheet.deleteRow(i);
//     })
// }
    
//Bai 5:
