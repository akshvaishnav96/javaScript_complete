
const url = 'https://api.github.com/users/demo';

const xml = new XMLHttpRequest();

xml.open('get',url);


xml.onreadystatechange = function(){

    if(this.readyState === 4){
        let userdata = this.responseText;

    userdata = JSON.parse(userdata);

    console.log(userdata);
    }

}

xml.send()


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++