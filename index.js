var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// yeah yeah you found my NYT API key, I am a bad developer and I should feel bad but honestly? horses. 
var apikey = "a4b333aa63dc64f10e6389dacd659332:17:56555074";
q = "horses"
page = Math.floor(Math.random()* 25)


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
    var rand = no_topics[Math.floor(Math.random() * no_topics.length)];
    horse = document.querySelector('#horse')
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
}
xhr.send()