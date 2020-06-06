'use strict';

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    
    changeMood(newMood){
        this.mood = newMood;
    },
    changePremium(newPremium) {
        this.premium = newPremium}
};
user.mood = 'happy';

user.changeMood('skydiving');
user.changePremium(false);


for (const key in user) {
    console.log('Key: ', key);
}

const entries = Object.entries(user);

for (const entry of entries) {
      const key = entry[0];
      const value = entry[1];
    
      console.log(`${key}: ${value}`);
    }
    