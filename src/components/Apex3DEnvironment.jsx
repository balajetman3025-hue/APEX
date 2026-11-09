import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Apex3DEnvironment() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1020, 2.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Dynamic Reactive Point Lights
    const cyanLight = new THREE.PointLight(0x00f0ff, 4.5, 15);
    cyanLight.position.set(-3, 2, 3);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0xa855f7, 4.5, 15);
    violetLight.position.set(3, -2, 3);
    scene.add(violetLight);

    // Central APEX 3D Monolith Group
    const apexGroup = new THREE.Group();
    scene.add(apexGroup);

    // Main 3D Tetrahedron Structure
    const apexGeo = new THREE.TetrahedronGeometry(2.0, 0);
    const apexMat = new THREE.MeshStandardMaterial({
      color: 0x050c1e,
      metalness: 0.9,
      roughness: 0.15,
      wireframe: false,
      transparent: true,
      opacity: 0.88,
    });
    const apexMesh = new THREE.Mesh(apexGeo, apexMat);
    apexMesh.rotation.x = 0.3;
    apexMesh.rotation.z = -0.15;
    apexGroup.add(apexMesh);

    // Glowing Laser Wireframe Edges
    const edgesGeo = new THREE.EdgesGeometry(apexGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      linewidth: 2,
    });
    const wireframe = new THREE.LineSegments(edgesGeo, edgesMat);
    apexMesh.add(wireframe);

    // Inner Glowing Singularity Core
    const coreGeo = new THREE.OctahedronGeometry(0.7, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.8,
      wireframe: true,
    });
    const innerCore = new THREE.Mesh(coreGeo, coreMat);
    apexGroup.add(innerCore);

    // Floating Orbital Torus Ring
    const ringGeo = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.6,
    });
    const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
    orbitalRing.rotation.x = Math.PI / 3;
    apexGroup.add(orbitalRing);

    // Second Angled Ring
    const ringGeo2 = new THREE.TorusGeometry(3.1, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.45,
    });
    const orbitalRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    orbitalRing2.rotation.y = Math.PI / 4;
    orbitalRing2.rotation.x = -Math.PI / 6;
    apexGroup.add(orbitalRing2);

    // Floating Satellite Geometric Debris (Icosahedrons & Octahedrons)
    const satellites = [];
    const satMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x00f0ff, metalness: 0.9, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0xa855f7, metalness: 0.9, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0xec4899, metalness: 0.9, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.9, roughness: 0.2 }),
    ];

    for (let i = 0; i < 6; i++) {
      const isOcta = i % 2 === 0;
      const geom = isOcta
        ? new THREE.OctahedronGeometry(0.28, 0)
        : new THREE.IcosahedronGeometry(0.22, 0);
      const mesh = new THREE.Mesh(geom, satMaterials[i % satMaterials.length]);

      const angle = (i / 6) * Math.PI * 2;
      const radius = 3.2 + Math.random() * 0.8;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2.5,
        Math.sin(angle) * radius
      );
      mesh.userData = {
        speed: 0.008 + Math.random() * 0.012,
        rotSpeed: 0.02 + Math.random() * 0.02,
        initialY: mesh.position.y,
        angle: angle,
        radius: radius,
      };

      scene.add(mesh);
      satellites.push(mesh);
    }

    // Floating Glowing Starfield Particles
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x7dd3fc,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });
    const particleSystem = new THREE.Points(partGeo, partMat);
    scene.add(particleSystem);

    // Mouse Tracking State
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / width) * 2 - 1;
      mouse.targetY = -(clientY / height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 500;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp Mouse Interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Parallax Camera & Apex Rotation
      apexGroup.rotation.y = elapsedTime * 0.25 + mouse.x * 0.8;
      apexGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.15 - mouse.y * 0.6;

      innerCore.rotation.y = -elapsedTime * 0.6;
      innerCore.rotation.z = elapsedTime * 0.4;

      orbitalRing.rotation.z = elapsedTime * 0.15;
      orbitalRing2.rotation.z = -elapsedTime * 0.12;

      // Update Light positions based on mouse for interactive specular highlights
      cyanLight.position.x = -3 + mouse.x * 2.5;
      cyanLight.position.y = 2 + mouse.y * 2.5;
      violetLight.position.x = 3 - mouse.x * 2.5;
      violetLight.position.y = -2 - mouse.y * 2.5;

      // Animate floating satellites
      satellites.forEach((sat) => {
        sat.userData.angle += sat.userData.speed;
        sat.position.x = Math.cos(sat.userData.angle) * sat.userData.radius;
        sat.position.z = Math.sin(sat.userData.angle) * sat.userData.radius;
        sat.position.y =
          sat.userData.initialY + Math.sin(elapsedTime * 1.5 + sat.userData.angle) * 0.35;
        sat.rotation.x += sat.userData.rotSpeed;
        sat.rotation.y += sat.userData.rotSpeed;
      });

      // Camera subtle tilt
      camera.position.x = mouse.x * 0.8;
      camera.position.y = mouse.y * 0.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      apexGeo.dispose();
      apexMat.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      partGeo.dispose();
      partMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[450px] sm:h-[550px] lg:h-[620px] relative cursor-grab active:cursor-grabbing flex items-center justify-center"
      data-cursor="explore"
    >
      {/* 3D Canvas Subtitle Overlay */}
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-slate-500 tracking-widest uppercase pointer-events-none z-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
        <span>INTERACTIVE 3D APEX MONOLITH // MOUSE PARALLAX ACTIVE</span>
      </div>
    </div>
  );
}
