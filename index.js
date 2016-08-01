var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// yeah yeah you found my NYT API key, I am a bad developer and I should feel bad but honestly? horses. 
var apikey = "a4b333aa63dc64f10e6389dacd659332:17:56555074";
q = "horses"
page = Math.floor(Math.random()* 25)


function newValentine(){
      v = document.getElementById('valentine')

      if (v) {document.body.removeChild(v)};
      
      t = document.createElement('h1')
      t.innerHTML = message[Math.floor(Math.random() * message.length)]
      footer = document.createElement('div')
      footer.id = 'footer'
      footer.innerHTML = '<a href="javascript:saveValentine()">&hearts; Save This Valentine</a> <a href="javascript:newValentine()">&orarr; Show Me Another Valentine</a> <a href="https://github.com/lifewinning/wernerherzogvalentines/blob/gh-pages/valentines.txt">&hearts; Contribute Valentines</a>'
      val = document.createElement('div')
      val.id = 'valentine'
      val.appendChild(t)
      val.appendChild(footer)
      document.body.appendChild(val)
    }

function neighLady(arr){
    var rand = arr[Math.floor(Math.random() * arr.length)];
    horse = document.querySelector('#hay')
    horse.innerHTML = ""
    hed = document.createElement('h1')
    hed.innerHTML = '<a href='+rand.web_url+'><em>'+rand.headline.main+'</em></a>'
    date = document.createElement('h3')
    // console.log(Date.parse(rand.pub_date))
    // date.innerHTML = rand.pub_date
    snippet = document.createElement('p')
    snippet.innerHTML = rand.snippet+'<hr>'
    horse.appendChild(hed)
    horse.appendChild(date)
    horse.appendChild(snippet)
}

var xhr = new XMLHttpRequest();
xhr.open("GET", url+'?api-key='+apikey+'&q='+q+'&page='+page, true);
xhr.onload = function() {
  if (xhr.status === 200) {
    var read = JSON.parse(xhr.responseText.trim());
    response = read.response.docs
    no_topics = []
    response.forEach(function(r){
      if (r.type_of_material != 'timestopic'){
        no_topics.push(r)
      } 
    })
    horse = document.querySelector('#horse')
    newHorse = document.createElement('h3')
    newHorse.innerHTML = '<a href=javascript:neighLady(no_topics)>Select Another Horse</a><hr>'
    horse.appendChild(newHorse)
    neighLady(no_topics)
  }
}
xhr.send()

