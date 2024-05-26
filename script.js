let mass, force;
let acceleration = 0;
let velocity = 0;
let position = 0;
let applyForceFlag = false;

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.parent('sketch-holder');
    mass = select('#mass').value();
    force = select('#force').value();
}

function draw() {
    background(220);

    // Dibujar el suelo
    fill(150);
    rect(0, height - 20, width, 20);

    // Dibujar el objeto
    fill(100);
    rect(position, height - 60, 40, 40);

    // Ley de Newton: F = m * a
    if (applyForceFlag) {
        acceleration = force / mass;
        velocity += acceleration;
        position += velocity;

        // Frenar la aplicación de fuerza para la simulación
        applyForceFlag = false;
    }

    // Frotamiento básico para detener el movimiento
    velocity *= 0.99;
    if (abs(velocity) < 0.01) {
        velocity = 0;
    }

    // Mostrar información
    fill(0);
    textSize(16);
    text(`Masa: ${mass} kg`, 10, 20);
    text(`Fuerza: ${force} N`, 10, 40);
    text(`Aceleración: ${acceleration.toFixed(2)} m/s²`, 10, 60);
    text(`Velocidad: ${velocity.toFixed(2)} m/s`, 10, 80);
}

function applyForce() {
    mass = parseFloat(select('#mass').value());
    force = parseFloat(select('#force').value());
    applyForceFlag = true;
}
