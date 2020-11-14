const PageState = function(){
  let currentState = new homeState(this);

  this.init = function(){
    this.change(new homeState)
  }
  this.change = function(state){
    currentState = state;
  }
}

const homeState = function(page){
  document.getElementById('header').innerHTML = null;
  document.getElementById('content').innerHTML = `
  <div class="jumbotron mt-4 home-page">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
  
  `
}

const aboutState = function(page){
  document.getElementById('header').innerHTML = `<h1 class="my-4 "> About Page </h1>`
  document.getElementById('content').innerHTML = `
  <div class="jumbotron mt-4 about-p">
  <p> Welcome! Get to know more about us </p>
  <p> Welcome! Get to know more about us </p>
  <p> Welcome! Get to know more about us </p>
  <p> Welcome! Get to know more about us </p>
  </div>
  
  `
}

const contactState = function(page){
  document.getElementById('header').innerHTML = `<h1 class="my-4"> Contact Us </h1>`
  document.getElementById('content').innerHTML = `
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `
}

const page = new PageState();

page.init();

document.getElementById('home').addEventListener('click',function(e){
  page.change(new homeState)
  tl.fromTo('.home-page',{opacity:0},{opacity:1,duration:2})
  e.preventDefault()
})
document.getElementById('about').addEventListener('click',function(e){
  page.change(new aboutState)
  tl.fromTo('.about-p',{opacity:0, y:'100%'},{y:'0%',opacity:1,duration:2,delay:0.5})
  e.preventDefault()
})
document.getElementById('contact').addEventListener('click',function(e){
  page.change(new contactState)
  e.preventDefault();
})


const tl = gsap.timeline({defaults:{ease:"power1.out"}})

tl.to('.text',{y:'0%', duration:1,stagger:0.4})
tl.to('.slider',{y:'-100%',duration:1.5,delay:0.5})
tl.to('.intro',{y:'-100%',duration:1},'-=1')
tl.fromTo('.home-page',{opacity:0},{opacity:1,duration:1})
