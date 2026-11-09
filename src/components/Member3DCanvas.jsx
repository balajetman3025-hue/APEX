import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Unique 3D Artifact Geometries matching each member's archetype:
// 1. Harsh Vardhan Singh (Architect / Blockchain): Dual-Ring Octahedral Vault
// 2. Shashwat Dubey (Strategist / Builder): Stellar Tetrahedron Matrix
// 3. Shreyansh Baranwal (Algorithmic): Crystalline Icosahedron Lattice
// 4. Ayush Patel (Developer / Interface): Kinetic Triple Torus Gyroscope
// 5. Aditya Shukla (Researcher / Security): Hexagonal Dodecahedron Prism

export default function Member3DCanvas({ member, isHovered }) {
  const mountRef = useRef(null);
  const hoverRef = useRef(isHovered);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    hoverRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 240;
    const height = container.clientHeight || 200;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.z = 4.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color conversion
    const hexColor = parseInt(member.color.replace('#', '0x'), 16);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(hexColor, 5.0, 10);
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0x00f0ff, 3.0, 8);
    backLight.position.set(-2, -2, 2);
    scene.add(backLight);

    // Root Group
    const group = new THREE.Group();
    scene.add(group);

    // Build specific 3D geometry archetype
    let mainMesh;
    let wireframeMesh;
    let subMesh;
    let ringMesh;

    const mainMat = new THREE.MeshStandardMaterial({
      color: 0x070e1c,
      metalness: 0.85,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9,
    });

    const wireMat = new THREE.LineBasicMaterial({
      color: hexColor,
      linewidth: 2,
    });

    const glowMat = new THREE.MeshBasicMaterial({
      color: hexColor,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    if (member.id === 'harsh-vardhan-singh') {
      // Blockchain Cryptographic Octahedral Node
      const geo = new THREE.OctahedronGeometry(1.2, 0);
      mainMesh = new THREE.Mesh(geo, mainMat);
      wireframeMesh = new THREE.LineSegments(new THREE.EdgesGeometry(geo), wireMat);
      mainMesh.add(wireframeMesh);
      group.add(mainMesh);

      // Outer Torus Ring
      const ringGeo = new THREE.TorusGeometry(1.7, 0.02, 16, 60);
      ringMesh = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: hexColor, transparent: true, opacity: 0.6 }));
      ringMesh.rotation.x = Math.PI / 3;
      group.add(ringMesh);

      // Inner Core
      const innerGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      subMesh = new THREE.Mesh(innerGeo, glowMat);
      group.add(subMesh);
    } else if (member.id === 'shashwat-dubey') {
      // Stellar Tetrahedron Strategy Core
      const geo = new THREE.TetrahedronGeometry(1.3, 0);
      mainMesh = new THREE.Mesh(geo, mainMat);
      wireframeMesh = new THREE.LineSegments(new THREE.EdgesGeometry(geo), wireMat);
      mainMesh.add(wireframeMesh);
      group.add(mainMesh);

      // Dual Intersecting Inverted Tetrahedron
      const invGeo = new THREE.TetrahedronGeometry(1.3, 0);
      invGeo.rotateX(Math.PI);
      const invMesh = new THREE.LineSegments(new THREE.EdgesGeometry(invGeo), new THREE.LineBasicMaterial({ color: 0x00f0ff }));
      group.add(invMesh);

      // Orbiting Sphere
      const sphereGeo = new THREE.SphereGeometry(0.2, 16, 16);
      subMesh = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
      group.add(subMesh);
    } else if (member.id === 'shreyansh-baranwal') {
      // Algorithmic Crystalline Icosahedron
      const geo = new THREE.IcosahedronGeometry(1.25, 0);
      mainMesh = new THREE.Mesh(geo, mainMat);
      wireframeMesh = new THREE.LineSegments(new THREE.EdgesGeometry(geo), wireMat);
      mainMesh.add(wireframeMesh);
      group.add(mainMesh);

      // Nested Dodecahedron Wireframe
      const innerGeo = new THREE.DodecahedronGeometry(0.7, 0);
      subMesh = new THREE.Mesh(innerGeo, glowMat);
      group.add(subMesh);
    } else if (member.id === 'ayush-patel') {
      // Interactive Gyroscope Torus Triad
      const geo = new THREE.TorusGeometry(1.3, 0.03, 16, 80);
      mainMesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: hexColor }));
      group.add(mainMesh);

      const ring2Geo = new THREE.TorusGeometry(1.1, 0.025, 16, 80);
      ringMesh = new THREE.Mesh(ring2Geo, new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.7 }));
      ringMesh.rotation.x = Math.PI / 2;
      group.add(ringMesh);

      const coreGeo = new THREE.OctahedronGeometry(0.65, 0);
      subMesh = new THREE.Mesh(coreGeo, mainMat);
      subMesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(coreGeo), wireMat));
      group.add(subMesh);
    } else {
      // Aditya Shukla: Research Dodecahedron Shield
      const geo = new THREE.DodecahedronGeometry(1.2, 0);
      mainMesh = new THREE.Mesh(geo, mainMat);
      wireframeMesh = new THREE.LineSegments(new THREE.EdgesGeometry(geo), wireMat);
      mainMesh.add(wireframeMesh);
      group.add(mainMesh);

      const ringGeo = new THREE.RingGeometry(1.6, 1.63, 32);
      ringMesh = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: hexColor, side: THREE.DoubleSide }));
      group.add(ringMesh);
    }

    // Micro floating particle cloud
    const partCount = 45;
    const partPositions = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount * 3; i += 3) {
      partPositions[i] = (Math.random() - 0.5) * 4;
      partPositions[i + 1] = (Math.random() - 0.5) * 4;
      partPositions[i + 2] = (Math.random() - 0.5) * 3;
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute('position', new THREE.BufferAttribute(partPositions, 3));
    const partMat = new THREE.PointsMaterial({
      color: hexColor,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(partGeo, partMat);
    group.add(particles);

    // Mouse tracking on container
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current.targetX = (x / rect.width) * 2 - 1;
      mouseRef.current.targetY = -(y / rect.height) * 2 + 1;
    };

    const parentCard = container.closest('[data-member-card]');
    if (parentCard) {
      parentCard.addEventListener('mousemove', handleMouseMove);
    } else {
      container.addEventListener('mousemove', handleMouseMove);
    }

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.08;
      m.y += (m.targetY - m.y) * 0.08;

      const isHover = hoverRef.current;
      const speedMultiplier = isHover ? 2.4 : 1.0;

      // Rotate 3D archetype
      group.rotation.y += 0.008 * speedMultiplier;
      group.rotation.x += 0.004 * speedMultiplier;

      // Parallax toward cursor when hovered
      if (isHover) {
        group.rotation.y = elapsed * 0.4 + m.x * 0.9;
        group.rotation.x = -m.y * 0.7;
        group.position.z = THREE.MathUtils.lerp(group.position.z, 0.4, 0.1);
      } else {
        group.position.z = THREE.MathUtils.lerp(group.position.z, 0, 0.05);
      }

      if (subMesh) {
        subMesh.rotation.y -= 0.015 * speedMultiplier;
        subMesh.rotation.z += 0.01 * speedMultiplier;
      }

      if (ringMesh) {
        ringMesh.rotation.z += 0.01 * speedMultiplier;
      }

      // Point light moves with cursor
      pointLight.position.x = 2 + m.x * 2;
      pointLight.position.y = 2 + m.y * 2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      if (parentCard) {
        parentCard.removeEventListener('mousemove', handleMouseMove);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      partGeo.dispose();
      partMat.dispose();
    };
  }, [member]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative pointer-events-none flex items-center justify-center overflow-hidden"
    />
  );
}
