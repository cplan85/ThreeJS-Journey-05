import './style.css'
import * as THREE from 'three'

console.log('Hello Carlos')
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
//y goes up and down
//x axis goes right or left
//z going forward but it is default
// mesh.position.x = 0.7
// mesh.position.y = - 0.6
// mesh.position.z = 1

//another way to set x, y, and z value
mesh.position.set(0.7, -0.6, 1)

//mesh.scale.x = 2
//mesh.scale.y = 0.5
//mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)


// Axes helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper);

//this will reduce the vector until the length is 1;
//mesh.position.normalize()

//distance between the center of the scene and the object's position.
console.log(mesh.position.length())

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

scene.add(camera)

//distance between the center of the scene and the object's position.
console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)