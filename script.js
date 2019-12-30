//Create Camera And Scene
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(67,window.innerWidth/window.innerHeight,0.1,1500)
camera.position.z = 65;
camera.position.x = 0;
camera.position.y = 0;
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

// Control
let controls = new THREE.OrbitControls(camera);
controls.addEventListener('change', function(){ renderer});
controls.minDistance = 50;
controls.maxDistance = 250;

// Sky Box
let materialArray = [];

let texture_ft = new THREE.TextureLoader().load( 'sky_box/yonder_ft.jpg');
let texture_bk = new THREE.TextureLoader().load( 'sky_box/yonder_bk.jpg');
let texture_up = new THREE.TextureLoader().load( 'sky_box/yonder_up.jpg');
let texture_dn = new THREE.TextureLoader().load( 'sky_box/yonder_dn.jpg');
let texture_rt = new THREE.TextureLoader().load( 'sky_box/yonder_rt.jpg');
let texture_lf = new THREE.TextureLoader().load( 'sky_box/yonder_lf.jpg');
  
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
for (let i = 0; i < 6; i++)
  materialArray[i].side = THREE.BackSide;
   
let skyboxGeo = new THREE.BoxGeometry( 500, 500, 500);
let skybox = new THREE.Mesh( skyboxGeo, materialArray );
scene.add(skybox);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    
    camera.updateProjectionMatrix();
})


//Light

var light = new THREE.AmbientLight(0x555FFF, 0.2)
scene.add(light);
var light = new THREE.PointLight(0xFFFFFF, 2, 1000)
light.position.set(0,20,25);
light.castShadow = true;
scene.add(light);
const color = 0xFFFFFF;
const intensity = 1;
const light_directional = new THREE.DirectionalLight(color, intensity);
light_directional.position.set(35, 40, 10);
light_directional.castShadow = true;
scene.add(light_directional);
  

//Load GLTF Models


var loader = new THREE.GLTFLoader();
loader.load('./kaio/scene.gltf',handle_load )
var island;
var mixer = null;

function handle_load(gltf){
   
    island = gltf.scene.children[ 0 ];
	scene.add( island );
	mixer = new THREE.AnimationMixer( island );
	mixer.clipAction( gltf.animations[ 0 ] ).setDuration( 30 ).play();

    island.position.z = 0;
    island.position.y = 1;
    island.position.x = 0;
    island.scale.set(0.4,0.4,0.4);

}

var loader2 = new THREE.GLTFLoader();
loader2.load('./Goku/scene.gltf',handle_load2 )
var Goku2;
function handle_load2(gltf){
    Goku2= gltf.scene.children[0];

    scene.add( Goku2 );
    Goku2.scale.set( 12, 12, 12 );

    Goku2.position.z = 20;
    Goku2.position.y = 0;
    Goku2.position.x = -20;

    Goku2.rotation.z = -1.5;

}
var loader3 = new THREE.GLTFLoader();
loader3.load('./dragon/scene.gltf',handle_load3 )
var dragon;
function handle_load3(gltf){
    dragon= gltf.scene.children[0];

    scene.add( dragon );
    dragon.scale.set( 0.05, 0.05, 0.05 );

    dragon.position.z = -15;
    dragon.position.y = -13;
    dragon.position.x = 6;

    dragon.rotation.z = 0;

}
var loader4 = new THREE.GLTFLoader();
loader4.load('./goku cloud/scene.gltf',handle_load4 )
var gokucloud;
function handle_load4(gltf){
    gokucloud= gltf.scene.children[0];

    scene.add( gokucloud );
    gokucloud.scale.set( 0.05, 0.05, 0.05 );

    gokucloud.position.z = -60;
    gokucloud.position.y = 0;
    gokucloud.position.x = 30;

    gokucloud.rotation.z = -1.5;

}
var loader5 = new THREE.GLTFLoader();
loader5.load('./dragon_balls/scene.gltf',handle_load5 )
var dragon_balls;
function handle_load5(gltf){
    dragon_balls= gltf.scene.children[0];

    scene.add( dragon_balls );
    dragon_balls.scale.set( 0.02, 0.02, 0.02 );

    dragon_balls.position.z = 0;
    dragon_balls.position.y = 5;
    dragon_balls.position.x = 17;


}

var loader6 = new THREE.GLTFLoader();
loader6.load('./monster/scene.gltf',handle_load6 )
var monster;
var mixer2 = null;

function handle_load6(gltf){
   
    monster = gltf.scene.children[ 0 ];
	scene.add( monster );
    mixer2 = new THREE.AnimationMixer( monster );
    console.log(gltf.animations)
	mixer2.clipAction( gltf.animations[ 0 ] ).setDuration( 2.5 ).play();

    monster.position.z = -45;
    monster.position.y = -38;
    monster.position.x = 10;
    monster.scale.set(0.35,0.35,0.35);
    monster.rotation.z =5;

}


var loader7 = new THREE.GLTFLoader();
loader7.load('./sun/scene.gltf',handle_load7 )
var sun;
function handle_load7(gltf){
    sun= gltf.scene.children[0];

    scene.add( sun );
   

    sun.position.z = -150;
    sun.position.y = 80;
    sun.position.x = -50;


}


var loader8 = new THREE.GLTFLoader();
loader8.load('./bills/scene.gltf',handle_load8 )
var beerus;
function handle_load8(gltf){
    beerus= gltf.scene.children[0];

    scene.add( beerus );
    beerus.scale.set( 12, 12, 12 );

    beerus.position.z = 22;
    beerus.position.y = 3.5;
    beerus.position.x = 12;
    
    beerus.rotation.z = -190;



}


var loader9 = new THREE.GLTFLoader();
loader9.load('./tornado/scene.gltf',handle_load9 )
var tornado;
function handle_load9(gltf){
    tornado= gltf.scene.children[0];

    scene.add( tornado );
    tornado.scale.set( 10, 10, 10 );

    tornado.position.z = 22;
    tornado.position.y = 12;
    tornado.position.x = 12;
    
    tornado.rotation.z = -190;



}




Sea = function(){
	var geom = new THREE.CylinderGeometry(600,600,800,40,10);
	geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

	// important: by merging vertices we ensure the continuity of the waves
	geom.mergeVertices();

	// get the vertices
	var l = geom.vertices.length;

	// create an array to store new data associated to each vertex
	this.waves = [];

	for (var i=0; i<l; i++){
		// get each vertex
		var v = geom.vertices[i];

		// store some data associated to it
		this.waves.push({y:v.y,
										 x:v.x,
										 z:v.z,
										 // a random angle
										 ang:Math.random()*Math.PI*2,
										 // a random distance
										 amp:5 + Math.random()*15,
										 // a random speed between 0.016 and 0.048 radians / frame
										 speed:0.016 + Math.random()*0.032
										});
	};
	var mat = new THREE.MeshPhongMaterial({
		color:0x00BFFF,
		transparent:true,
		opacity:.8,
		shading:THREE.FlatShading,
	});

	this.mesh = new THREE.Mesh(geom, mat);
	this.mesh.receiveShadow = true;

}

// to update the position of the vertices to simulate the waves
Sea.prototype.moveWaves = function (){
	
	// get the vertices
	var verts = this.mesh.geometry.vertices;
	var l = verts.length;
	
	for (var i=0; i<l; i++){
		var v = verts[i];
		
		// get the data associated to it
		var vprops = this.waves[i];
		
		// update the position of the vertex
		v.x = vprops.x + Math.cos(vprops.ang)*vprops.amp;
		v.y = vprops.y + Math.sin(vprops.ang)*vprops.amp;

		// increment the angle for the next frame
		vprops.ang += vprops.speed;

	}

	// Tell the renderer that the geometry of the sea has changed.
	// In fact, in order to maintain the best level of performance, 
	// three.js caches the geometries and ignores any changes
	// unless we add this line
	this.mesh.geometry.verticesNeedUpdate=true;

	sea.mesh.rotation.z += .005;
}

// Instantiate the sea and add it to the scene:
var sea;
function createSea(){
	sea = new Sea();
	// push it a little bit at the bottom of the scene
	sea.mesh.position.y = -630;
	// add the mesh of the sea to the scene
	scene.add(sea.mesh);
}
createSea();




Cloud = function(){
	// Create an empty container that will hold the different parts of the cloud
	this.mesh = new THREE.Object3D();
	
	// create a cube geometry;
	// this shape will be duplicated to create the cloud
	var geom = new THREE.BoxGeometry(20,20,20);
	
	// create a material; a simple white material will do the trick
	var mat = new THREE.MeshPhongMaterial({
		color:0xFF0000,  
	});
	
	// duplicate the geometry a random number of times
	var nBlocs = 3+Math.floor(Math.random()*3);
	for (var i=0; i<nBlocs; i++ ){
		
		// create the mesh by cloning the geometry
		var m = new THREE.Mesh(geom, mat); 
		
		// set the position and the rotation of each cube randomly
		m.position.x = i*15;
		m.position.y = Math.random()*10;
		m.position.z = Math.random()*10;
		m.rotation.z = Math.random()*Math.PI*2;
		m.rotation.y = Math.random()*Math.PI*2;
		
		// set the size of the cube randomly
		var s = .1 + Math.random()*.9;
		m.scale.set(s,s,s);
		
		// allow each cube to cast and to receive shadows
		m.castShadow = true;
		m.receiveShadow = true;
		
		// add the cube to the container we first created
		this.mesh.add(m);
	} 
}



// Define a Sky Object
Sky = function(){
	// Create an empty container
	this.mesh = new THREE.Object3D();
	
	// choose a number of clouds to be scattered in the sky
	this.nClouds = 20;
	
	// To distribute the clouds consistently,
	// we need to place them according to a uniform angle
	var stepAngle = Math.PI*2 / this.nClouds;
	
	// create the clouds
	for(var i=0; i<this.nClouds; i++){
		var c = new Cloud();
	 
		// set the rotation and the position of each cloud;
		// for that we use a bit of trigonometry
		var a = stepAngle*i; // this is the final angle of the cloud
		var h = 0 + Math.random()*200; // this is the distance between the center of the axis and the cloud itself

		// Trigonometry!!! I hope you remember what you've learned in Math :)
		// in case you don't: 
		// we are simply converting polar coordinates (angle, distance) into Cartesian coordinates (x, y)
		c.mesh.position.y = Math.sin(a)*h;
		c.mesh.position.x = Math.cos(a)*h;

		// rotate the cloud according to its position
		c.mesh.rotation.z = a + Math.PI/2;

		// for a better result, we position the clouds 
		// at random depths inside of the scene
		c.mesh.position.z = 0-Math.random()*400;
		
		// we also set a random scale for each cloud
		var s = 1+Math.random()*2;
		c.mesh.scale.set(s,s,s);

		// do not forget to add the mesh of each cloud in the scene
		this.mesh.add(c.mesh);  
	}  
}
// towards the bottom of the screen
var sky;

function createSky(){
	sky = new Sky();
	sky.mesh.position.y = -600;
	scene.add(sky.mesh);
}


createSky();
















var i = 0;
function animate(){
    gokucloud.position.x -=0.2;
    sea.moveWaves();
    monster.position.x -= 0.2;
    dragon_balls.rotation.z+=0.1;
    tornado.rotation.z -= 0.3;
}


//Animation Function
var prevTime = Date.now();
var prevTime2 = Date.now();
var render = function() {
   requestAnimationFrame(render);
   renderer.render(scene, camera);
   if( gokucloud && dragon_balls){
        animate();
   }
   
   if ( mixer ) {
    var time = Date.now();
    mixer.update( ( time - prevTime ) * 0.001 );
    prevTime = time;
    }
    // if ( mixer2 ) {
    //     var time = Date.now();
    //     mixer2.update( ( time - prevTime ) *0.07 );
    //     prevTime2 = time;
    // }
}

render();























