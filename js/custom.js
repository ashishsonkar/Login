let main = document.getElementsByTagName("main")[0];

let section1="<section id='Sec1'></section>"
main.insertAdjacentHTML("beforeend",section1);

Sec1.innerHTML +=`
    <div class="row h-100 w-100 m-0" id="sec1Row">
	  <div class="col-md-5 d-flex align-items-center" id="Sec1Col1">
	    <div class="container w-75">
		  <button class="btn rounded-circle bg-primary text-white fs-24 d-none my-2" id="backBtn">←</button>
		  <div class=" mb-5" id="topDiv">
		    <h4 class="font-weight-bolder" id="heading">LOGIN</h4> 
		    <div class="d-none" id="alertBox"></div>
		  </div>
		  <div class="form-group fs-24 d-none" id="nameBox">
			<label for="usr">Fullname</label>
		    <input type="text" class="form-control border-0 bg-light p-4" placeholder="input name" id="FullName">
		  </div>
		  <div class="form-group fs-24">
		    <label for="usr">Username</label>
		    <input type="text" class="form-control border-0 bg-light p-4" id="usr" placeholder="input username" autocomplete="on">
		  </div>
		  <div class="form-group fs-24">
            <label for="pwd">Password</label>
			<input type="password" class="form-control border-0 bg-light p-4" id="pwd" placeholder="input password" autocomplete="on">
		  </div>
		  <button class="btn btn-block btn-primary my-4 p-3 d-none" id="cBtn">Create</button>
		  <button class="btn btn-block btn-primary my-4 p-3" id="lBtn">Login With Email</button>
		  <button class="btn btn-block border-primary text-primary my-4 p-3" id="cnBtn">Create a new account</button>
		</div>
	  </div><!-- end colum -->
	  <div class="col-md-7 bg-color" id="Sec1Col2">
	    <div class="container d-flex justify-content-center">
		  <div class="w-75 py-5" id="wrapper2">
		    <div id="demo" class="carousel slide" data-ride="carousel">
			  <ul class="carousel-indicators">
			    <li data-target="#demo" data-slide-to="0" class="active"></li>
			    <li data-target="#demo" data-slide-to="1"></li>
			    <li data-target="#demo" data-slide-to="2"></li>
			  </ul>
			
			  <div class="carousel-inner text-center py-5" id="Slider-container">
			    <div class="carousel-item active">
				  <div class="row d-flex align-items-center">
				    <div class="col-sm-6 col-md-12">
					  <img src="images/img1.svg" alt="img1" height="356" width="493" class="p-4">
					</div>
				    <div class="col-sm-6 col-md-12">
					  <p class="text-white fs-24">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
					</div>
				  </div>
			    </div>
			    <div class="carousel-item">
				  <div class="row d-flex align-items-center">
				    <div class="col-sm-6 col-md-12 d-flex align-items-center">
					  <img src="images/img2.svg" alt="img2" height="356" width="493" class="p-4">
					</div>
				    <div class="col-sm-6 col-md-12">
					  <p class="text-white fs-24">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
					</div>
				  </div>
			    </div>
			    <div class="carousel-item">
				  <div class="row d-flex align-items-center">
				    <div class="col-sm-6 col-md-12 d-flex align-items-center">
					  <img src="images/img3.svg" alt="img3" height="356" width="493" class="p-4">
					</div>
				    <div class="col-sm-6 col-md-12">
					  <p class="text-white fs-24">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
					</div>
				  </div>
			    </div>
			  </div>
		    </div><!-- end carousel -->
		    <button class="btn btn-block bg-white d-none" id="mobileLogin">Login with Email</button>
		  </div>
		</div><!-- end container -->
	  </div><!-- end colum -->
	</div><!-- end row -->
`;

function MobileLogin(){
	Sec1Col1.setAttribute("style","display:block !important; margin: 20px auto");
	Sec1Col2.setAttribute("style","display:none !important");
}

mobileLogin.addEventListener("click",MobileLogin);

function back(){
	Sec1Col1.setAttribute("style","display:none !important;");
	Sec1Col2.setAttribute("style","display:block !important");
}
backBtn.addEventListener("click",back);

function clearFields(){
	document.querySelector("#FullName").value="";
	document.querySelector("#usr").value="";
	document.querySelector("#pwd").value="";
}

function createNew(){
	let name=document.getElementById("nameBox");
	nameBox.classList.remove("d-none");
	let lBtn=document.getElementById("lBtn");
	lBtn.className="btn btn-block border-primary text-primary my-4 p-3";
	let cBtn=document.getElementById("cBtn");
	cBtn.classList.remove("d-none");
	let cnBtn=document.getElementById("cnBtn");
	cnBtn.classList.add("d-none");
	let heading=document.getElementById("heading"); 
	heading.innerText="Create a New Account";
}
cnBtn.addEventListener("click",createNew);

function create(){
	
	let name=document.querySelector("#FullName").value;
	let usr=document.querySelector("#usr").value;
	let pwd=document.querySelector("#pwd").value;
	
	localStorage.setItem("fullName", name);
	localStorage.setItem("user", usr);
	localStorage.setItem("password", pwd);
	
	alertBox.innerText="Account created successfully";
	alertBox.className="alert alert-warning";
	clearFields();
	
	setTimeout(()=>{document.querySelector(".alert").remove()},3000);
}
cBtn.addEventListener("click",create);


function Login(){
	
	let heading=document.getElementById("heading"); 
	heading.innerText="LOGIN";
	
	let name=document.getElementById("nameBox");
	nameBox.classList.add("d-none");
	
	let cBtn=document.getElementById("cBtn");
	cBtn.classList.add("d-none");
	let lBtn=document.getElementById("lBtn");
	lBtn.className="btn btn-block btn-primary my-4 p-3";
	let cnBtn=document.getElementById("cnBtn");
	cnBtn.classList.remove("d-none");
	
	let usr=document.querySelector("#usr").value;
	let pwd=document.querySelector("#pwd").value;
	
	let user=localStorage.getItem("user");
	let password=localStorage.getItem("password");

	if(user === usr && password === pwd){
		alertBox.innerText="Login successfully";
		alertBox.className="alert alert-success";
		clearFields();
		
	}else{
		alertBox.innerText="Invalid credentials";
		alertBox.className="alert alert-danger";
	}
	setTimeout(()=>{document.querySelector(".alert").remove()},3000);
	event.preventDefault();
}
lBtn.addEventListener("click",Login);