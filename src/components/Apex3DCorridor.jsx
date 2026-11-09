import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { soundManager } from '../utils/audioSynth';
import { Volume2, VolumeX, ChevronRight, Sparkles, Maximize2 } from 'lucide-react';

export default function Apex3DCorridor({ onOpenMember, onOpenProject }) {
  const mountRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentEra, setCurrentEra] = useState('THE AGE OF GRAVITY');
  const [currentChapter, setCurrentChapter] = useState('CHAPTER 1: BØRN AT GL BAJAJ');
  const [audioActive, setAudioActive] = useState(false);
  const isDraggingRef = useRef(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080f, 0.035);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 1.6, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x181410, 1.8);
    scene.add(ambientLight);

    const warmSpot = new THREE.PointLight(0xffa726, 3.5, 25);
    warmSpot.position.set(0, 4, 2);
    scene.add(warmSpot);

    const cyanSpot = new THREE.PointLight(0x00f0ff, 3.0, 30);
    cyanSpot.position.set(0, 3, -18);
    scene.add(cyanSpot);

    // Dynamic corridor groups along Z-axis (from Z = 5 down to Z = -50)
    // -------------------------------------------------------------
    // SECTION 1: ENTRANCE WOODEN HALL & GLOWING CIRCUIT TREE (Z = 5 to Z = -5)
    // -------------------------------------------------------------
    const hallFloorGeo = new THREE.PlaneGeometry(14, 70);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x110d08,
      roughness: 0.7,
      metalness: 0.2,
    });
    const floor = new THREE.Mesh(hallFloorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, -25);
    scene.add(floor);

    // Left Wooden Wall with Circuit Tree
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x1a120c,
      roughness: 0.8,
    });
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(70, 10), wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-6, 3.5, -25);
    scene.add(leftWall);

    // Right Wooden Wall
    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(70, 10), wallMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(6, 3.5, -25);
    scene.add(rightWall);

    // Circuit Tree Canvas Texture for Left Wall (Like in Frame 1)
    const circuitCanvas = document.createElement('canvas');
    circuitCanvas.width = 1024;
    circuitCanvas.height = 1024;
    const cctx = circuitCanvas.getContext('2d');
    
    // Draw glowing circuit tree
    cctx.fillStyle = '#0f0a06';
    cctx.fillRect(0, 0, 1024, 1024);
    cctx.strokeStyle = '#ff9800';
    cctx.lineWidth = 4;
    cctx.shadowColor = '#ffb74d';
    cctx.shadowBlur = 12;

    // CPU Root Base
    cctx.strokeRect(412, 750, 200, 140);
    cctx.fillStyle = '#1e140a';
    cctx.fillRect(412, 750, 200, 140);
    cctx.fillStyle = '#ffb74d';
    cctx.font = 'bold 24px monospace';
    cctx.textAlign = 'center';
    cctx.fillText('APEX CORE', 512, 830);

    // Trunk
    cctx.beginPath();
    cctx.moveTo(512, 750);
    cctx.lineTo(512, 450);
    // Left branches
    cctx.moveTo(512, 620);
    cctx.lineTo(340, 520);
    cctx.lineTo(340, 320);
    cctx.lineTo(240, 220);

    cctx.moveTo(512, 530);
    cctx.lineTo(390, 430);
    cctx.lineTo(390, 280);

    // Right branches
    cctx.moveTo(512, 620);
    cctx.lineTo(684, 520);
    cctx.lineTo(684, 320);
    cctx.lineTo(784, 220);

    cctx.moveTo(512, 530);
    cctx.lineTo(634, 430);
    cctx.lineTo(634, 280);

    cctx.stroke();

    // Node circles / glowing leaves
    const nodeCoords = [
      [240, 220], [340, 320], [390, 280], [512, 380], [512, 260],
      [634, 280], [684, 320], [784, 220], [450, 480], [574, 480]
    ];
    cctx.fillStyle = '#ffcc80';
    nodeCoords.forEach(([x, y]) => {
      cctx.beginPath();
      cctx.arc(x, y, 9, 0, Math.PI * 2);
      cctx.fill();
    });

    const circuitTex = new THREE.CanvasTexture(circuitCanvas);
    const circuitMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 6),
      new THREE.MeshBasicMaterial({ map: circuitTex, transparent: true })
    );
    circuitMesh.rotation.y = Math.PI / 2;
    circuitMesh.position.set(-5.9, 3.5, 0);
    scene.add(circuitMesh);

    // Central Wall Panel (Chapter 1 Text Panel)
    const panelCanvas = document.createElement('canvas');
    panelCanvas.width = 1024;
    panelCanvas.height = 512;
    const pctx = panelCanvas.getContext('2d');
    pctx.fillStyle = '#17110b';
    pctx.fillRect(0, 0, 1024, 512);
    pctx.fillStyle = '#ff9800';
    pctx.font = '22px monospace';
    pctx.fillText('CHAPTER 1', 60, 80);
    pctx.fillStyle = '#ffffff';
    pctx.font = 'bold 54px Orbitron, sans-serif';
    pctx.fillText('BØRN AT GL BAJAJ', 60, 160);
    pctx.fillStyle = '#cccccc';
    pctx.font = '22px Space Grotesk, sans-serif';
    pctx.fillText('Five curious minds exploring technology, building intelligent solutions,', 60, 240);
    pctx.fillText('and transforming ambitious ideas into meaningful creations.', 60, 280);
    pctx.fillText('Walk forward through the ages to explore our creations & milestones.', 60, 340);
    pctx.fillStyle = '#ff9800';
    pctx.font = 'bold 20px monospace';
    pctx.fillText('SCROLL OR DRAG RAIL TO VISIT →', 60, 420);

    const panelTex = new THREE.CanvasTexture(panelCanvas);
    const textPanel = new THREE.Mesh(
      new THREE.PlaneGeometry(6.5, 3.25),
      new THREE.MeshBasicMaterial({ map: panelTex })
    );
    textPanel.position.set(0, 3.2, -4);
    scene.add(textPanel);

    // -------------------------------------------------------------
    // SECTION 2: THE ORIGIN FRAME (Z = -9) (Like Frame 3 in Video)
    // -------------------------------------------------------------
    const originFrameGroup = new THREE.Group();
    originFrameGroup.position.set(0, 3.2, -10);

    // Large painting plane
    const originCanvas = document.createElement('canvas');
    originCanvas.width = 1024;
    originCanvas.height = 512;
    const octx = originCanvas.getContext('2d');
    // Dark moody atmospheric landscape gradient
    const og = octx.createLinearGradient(0, 0, 1024, 512);
    og.addColorStop(0, '#0a101d');
    og.addColorStop(0.5, '#1e140d');
    og.addColorStop(1, '#05070c');
    octx.fillStyle = og;
    octx.fillRect(0, 0, 1024, 512);

    octx.fillStyle = '#ff9800';
    octx.font = '20px monospace';
    octx.textAlign = 'center';
    octx.fillText('THE ORIGIN', 512, 100);

    octx.fillStyle = '#ffffff';
    octx.font = 'bold 50px Orbitron, sans-serif';
    octx.fillText('EVERY REVOLUTION HAS AN ORIGIN', 512, 180);

    octx.fillStyle = '#dddddd';
    octx.font = '24px Space Grotesk, sans-serif';
    octx.fillText('A spark, five students beneath late-night campus dorms.', 512, 270);
    octx.fillText('APEX begins where that ambition catches fire.', 512, 320);

    const originTex = new THREE.CanvasTexture(originCanvas);
    const originMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 4),
      new THREE.MeshBasicMaterial({ map: originTex })
    );
    originFrameGroup.add(originMesh);

    // Glowing Golden Frame Border
    const frameBorder = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.PlaneGeometry(8.1, 4.1)),
      new THREE.LineBasicMaterial({ color: 0xffa726, linewidth: 3 })
    );
    originFrameGroup.add(frameBorder);
    scene.add(originFrameGroup);

    // -------------------------------------------------------------
    // SECTION 3: THE TWISTING HELICAL IRIS PORTAL (Z = -16) (Like Frame 4)
    // -------------------------------------------------------------
    const irisGroup = new THREE.Group();
    irisGroup.position.set(0, 3.2, -16);
    scene.add(irisGroup);

    const bladeCount = 14;
    const irisBlades = [];
    const bladeGeo = new THREE.BufferGeometry();
    const bladeVertices = new Float32Array([
      0, 0, 0,
      1.2, 3.5, 0,
      -1.2, 3.5, 0
    ]);
    bladeGeo.setAttribute('position', new THREE.BufferAttribute(bladeVertices, 3));
    bladeGeo.computeVertexNormals();

    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x8a6234,
      roughness: 0.4,
      metalness: 0.6,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < bladeCount; i++) {
      const angle = (i / bladeCount) * Math.PI * 2;
      const bladeMesh = new THREE.Mesh(bladeGeo, bladeMat);
      bladeMesh.rotation.z = angle;
      bladeMesh.userData = { initialRotZ: angle };
      irisGroup.add(bladeMesh);
      irisBlades.push(bladeMesh);
    }

    // Outer Portal Ring
    const portalRing = new THREE.Mesh(
      new THREE.TorusGeometry(3.6, 0.15, 16, 60),
      new THREE.MeshStandardMaterial({ color: 0xffa726, metalness: 0.8, roughness: 0.2 })
    );
    irisGroup.add(portalRing);

    // -------------------------------------------------------------
    // SECTION 4: THE EXHIBITION GALLERY CHAMBER (Z = -22 to Z = -32) (Frame 5)
    // -------------------------------------------------------------
    const galleryGroup = new THREE.Group();
    galleryGroup.position.set(0, 3.2, -26);
    scene.add(galleryGroup);

    // 3 Floating Exhibition Artifacts with glowing brackets:
    // 1. GOVINNOVATE (Center-Left)
    // 2. SUSTAINATHON 2.0 (Center)
    // 3. HACKFRONT GOLDEN TICKET (Center-Right)
    const cardData = [
      {
        title: "GOVINNOVATE",
        sub: "AI / GOVTECH / BLOCKCHAIN",
        desc: "Sustainathon 2.0 Theme Winner",
        color: "#00f0ff",
        x: -3.8
      },
      {
        title: "SUSTAINATHON 2.0",
        sub: "SHARDA UNIVERSITY",
        desc: "1st Place Theme-Wise Victory",
        color: "#ff9800",
        x: 0
      },
      {
        title: "hackFront INDIA",
        sub: "IIIT DELHI FINALE",
        desc: "National Finale Golden Ticket",
        color: "#a855f7",
        x: 3.8
      }
    ];

    cardData.forEach((item) => {
      const cCanvas = document.createElement('canvas');
      cCanvas.width = 512;
      cCanvas.height = 700;
      const cctx = cCanvas.getContext('2d');

      // Card Background
      cctx.fillStyle = '#080d1a';
      cctx.fillRect(0, 0, 512, 700);

      // Glowing border
      cctx.strokeStyle = item.color;
      cctx.lineWidth = 6;
      cctx.strokeRect(20, 20, 472, 660);

      // Card Header
      cctx.fillStyle = item.color;
      cctx.font = 'bold 22px monospace';
      cctx.textAlign = 'center';
      cctx.fillText(item.sub, 256, 120);

      cctx.fillStyle = '#ffffff';
      cctx.font = 'bold 38px Orbitron, sans-serif';
      cctx.fillText(item.title, 256, 200);

      // Inner Graphic Box
      cctx.fillStyle = '#111827';
      cctx.fillRect(60, 260, 392, 240);
      cctx.strokeStyle = item.color;
      cctx.lineWidth = 2;
      cctx.strokeRect(60, 260, 392, 240);

      cctx.fillStyle = item.color;
      cctx.font = 'bold 28px Orbitron, sans-serif';
      cctx.fillText('EXHIBIT ARTIFACT', 256, 390);

      cctx.fillStyle = '#94a3b8';
      cctx.font = '22px Space Grotesk, sans-serif';
      cctx.fillText(item.desc, 256, 560);

      cctx.fillStyle = item.color;
      cctx.font = 'bold 20px monospace';
      cctx.fillText('CLICK TO OPEN DOSSIER', 256, 620);

      const cTex = new THREE.CanvasTexture(cCanvas);
      const cardMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2.6, 3.6),
        new THREE.MeshBasicMaterial({ map: cTex, side: THREE.DoubleSide })
      );
      cardMesh.position.set(item.x, 0, 0);

      // Glowing corner brackets
      const bracketGeo = new THREE.BufferGeometry();
      const bVertices = new Float32Array([
        -1.4, 1.9, 0,  -1.1, 1.9, 0,
        -1.4, 1.9, 0,  -1.4, 1.6, 0,
        1.4, 1.9, 0,   1.1, 1.9, 0,
        1.4, 1.9, 0,   1.4, 1.6, 0,
        -1.4, -1.9, 0, -1.1, -1.9, 0,
        -1.4, -1.9, 0, -1.4, -1.6, 0,
        1.4, -1.9, 0,  1.1, -1.9, 0,
        1.4, -1.9, 0,  1.4, -1.6, 0,
      ]);
      bracketGeo.setAttribute('position', new THREE.BufferAttribute(bVertices, 3));
      const bracketLines = new THREE.LineSegments(
        bracketGeo,
        new THREE.LineBasicMaterial({ color: parseInt(item.color.replace('#', '0x'), 16), linewidth: 3 })
      );
      cardMesh.add(bracketLines);

      galleryGroup.add(cardMesh);
    });

    // -------------------------------------------------------------
    // SECTION 5: ARCHITECTURAL COLONNADE ARCADE & RED CARPET (Z = -34 to -48)
    // -------------------------------------------------------------
    const colonnadeGroup = new THREE.Group();
    scene.add(colonnadeGroup);

    // Red Runner Carpet along hallway
    const carpetGeo = new THREE.PlaneGeometry(2.2, 22);
    const carpetMat = new THREE.MeshStandardMaterial({ color: 0xba1a1a, roughness: 0.6 });
    const redCarpet = new THREE.Mesh(carpetGeo, carpetMat);
    redCarpet.rotation.x = -Math.PI / 2;
    redCarpet.position.set(0, 0.02, -41);
    colonnadeGroup.add(redCarpet);

    // Architectural Arches
    const archMat = new THREE.MeshStandardMaterial({
      color: 0x241b12,
      roughness: 0.7,
      metalness: 0.1,
    });

    for (let z = -34; z >= -48; z -= 2.8) {
      const arch = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.35, 16, 40, Math.PI), archMat);
      arch.position.set(0, 2.5, z);
      colonnadeGroup.add(arch);

      const pillarLeft = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3.0, 0.5), archMat);
      pillarLeft.position.set(-3.0, 1.5, z);
      colonnadeGroup.add(pillarLeft);

      const pillarRight = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3.0, 0.5), archMat);
      pillarRight.position.set(3.0, 1.5, z);
      colonnadeGroup.add(pillarRight);
    }

    // Distant Grand Apex Monolith at end of colonnade
    const apexGeo = new THREE.TetrahedronGeometry(2.5, 0);
    const apexMat = new THREE.MeshStandardMaterial({
      color: 0x050c1e,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.4,
      wireframe: true,
    });
    const apexEndMonolith = new THREE.Mesh(apexGeo, apexMat);
    apexEndMonolith.position.set(0, 3.2, -50);
    scene.add(apexEndMonolith);

    // Floating Atmospheric Ember Particles (Like in the video)
    const emberCount = 250;
    const emberPositions = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount * 3; i += 3) {
      emberPositions[i] = (Math.random() - 0.5) * 12;
      emberPositions[i + 1] = Math.random() * 6;
      emberPositions[i + 2] = -Math.random() * 52;
    }
    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    const emberMat = new THREE.PointsMaterial({
      color: 0xffa726,
      size: 0.08,
      transparent: true,
      opacity: 0.75,
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    scene.add(embers);

    // Mouse Interaction
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / width) * 2 - 1;
      mouse.targetY = -(e.clientY / height) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Scroll Wheel Camera Navigation
    const onWheel = (e) => {
      progressRef.current = Math.max(0, Math.min(1, progressRef.current + e.deltaY * 0.0007));
      setScrollProgress(progressRef.current);
    };
    container.addEventListener('wheel', onWheel, { passive: true });

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Position Camera along the Z-axis corridor based on progress:
      // Start at Z = 4, travel down to Z = -46
      const targetZ = 4 - progressRef.current * 48;
      camera.position.z += (targetZ - camera.position.z) * 0.08;

      // Subtle mouse tilt for immersive looking around
      camera.position.x = mouse.x * 0.6;
      camera.position.y = 1.6 + mouse.y * 0.35;
      camera.lookAt(mouse.x * 0.4, 1.6 + mouse.y * 0.2, camera.position.z - 5);

      // Dynamic Iris Portal Opening effect (as camera approaches Z = -16)
      const distToPortal = Math.abs(camera.position.z - (-16));
      const irisOpen = Math.max(0, 1 - distToPortal / 6);
      irisBlades.forEach((b) => {
        b.rotation.z = b.userData.initialRotZ + irisOpen * 1.2;
        b.position.x = Math.cos(b.userData.initialRotZ) * irisOpen * 1.5;
        b.position.y = Math.sin(b.userData.initialRotZ) * irisOpen * 1.5;
      });

      // Rotate apex monolith
      apexEndMonolith.rotation.y = elapsed * 0.4;
      apexEndMonolith.rotation.x = elapsed * 0.2;

      // Float embers gently
      const pos = emberGeo.attributes.position.array;
      for (let i = 1; i < emberCount * 3; i += 3) {
        pos[i] += Math.sin(elapsed + i) * 0.005;
      }
      emberGeo.attributes.position.needsUpdate = true;

      // Era determination
      if (camera.position.z > -6) {
        setCurrentEra('THE AGE OF GRAVITY');
        setCurrentChapter('CHAPTER 1: BØRN AT GL BAJAJ');
      } else if (camera.position.z > -16) {
        setCurrentEra('THE AGE OF CURIOSITY');
        setCurrentChapter('THE ORIGIN: AMBITIONS AWAKEN');
      } else if (camera.position.z > -32) {
        setCurrentEra('THE AGE OF IDEAS');
        setCurrentChapter('THE EXHIBITION: SUSTAINATHON & GOVINNOVATE');
      } else {
        setCurrentEra('THE AGE OF INNOVATION');
        setCurrentChapter('THE HORIZON: BEYOND IDEAS');
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('wheel', onWheel);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleRailMouseDown = (e) => {
    isDraggingRef.current = true;
    updateRail(e);
  };

  const updateRail = (e) => {
    const rail = document.getElementById('corridor-rail');
    if (!rail) return;
    const rect = rail.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    progressRef.current = pos;
    setScrollProgress(pos);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isDraggingRef.current) {
        updateRail(e);
      }
    };
    const onMouseUp = () => {
      isDraggingRef.current = false;
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const toggleSound = () => {
    const s = soundManager.toggle();
    setAudioActive(s);
  };

  return (
    <div className="relative w-full h-screen bg-[#06080f] overflow-hidden select-none">
      {/* 3D Three.js Container */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Top Floating Glass Navigation Header (Exact look from Video) */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 py-5 flex items-center justify-between pointer-events-auto">
        {/* Brand Left */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-orbitron font-black text-slate-950 text-lg shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-black text-lg tracking-[0.2em] text-white">
              APEX'27
            </span>
            <span className="font-mono text-[9px] text-cyan-400 tracking-widest">
              INNOVATION COLLECTIVE
            </span>
          </div>
        </div>

        {/* Center Pill Menu (Matching Techkriti Video Style) */}
        <nav className="hidden md:flex items-center gap-1 px-5 py-2 rounded-full bg-[#0a0f1d]/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl">
          {['ABOUT', 'TEAM', 'ACHIEVEMENTS', 'CREATIONS', 'FRONTIERS', 'JOURNEY', 'CONTACT'].map((item) => (
            <button
              key={item}
              onClick={() => {
                soundManager.playClick();
                const el = document.getElementById(item.toLowerCase());
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3.5 py-1 text-xs font-mono tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right Side: (S) SHASHWAT User Badge & Sound Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
            title="Toggle Atmosphere"
          >
            {audioActive ? <Volume2 size={16} className="text-cyan-400" /> : <VolumeX size={16} />}
          </button>

          {/* User Profile Badge (Seen in Video: (S) SHASHWAT) */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e130c]/90 border border-amber-600/50 text-white font-mono text-xs shadow-[0_0_15px_rgba(255,152,0,0.2)]">
            <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 font-bold flex items-center justify-center text-xs">
              S
            </span>
            <span className="tracking-wider font-bold">SHASHWAT</span>
          </div>
        </div>
      </header>

      {/* Floating Interactive Golden Progress Rail: "SCROLL TO VISIT" (Exact look from Video Frame 1 & 2) */}
      <div className="absolute bottom-16 right-8 sm:right-16 z-20 flex flex-col items-end gap-2 pointer-events-auto">
        <span className="font-mono text-xs text-amber-300/90 tracking-[0.25em] uppercase font-bold">
          SCROLL TO VISIT
        </span>
        <div
          id="corridor-rail"
          onMouseDown={handleRailMouseDown}
          className="relative w-64 sm:w-80 h-1.5 rounded-full bg-slate-800/80 border border-amber-500/40 cursor-pointer shadow-[0_0_15px_rgba(255,152,0,0.2)]"
        >
          {/* Progress fill */}
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
          {/* Draggable knob */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-amber-500 shadow-[0_0_10px_#ffb74d] transition-transform"
            style={{ left: `calc(${scrollProgress * 100}% - 8px)` }}
          />
        </div>
      </div>

      {/* Bottom Left Era & Chapter HUD (Exact look from Video Frame 1, 2, 5, 6) */}
      <div className="absolute bottom-12 left-8 sm:left-12 z-20 font-mono text-xs pointer-events-none">
        <div className="text-amber-400 font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>{currentEra}</span>
        </div>
        <div className="text-slate-400 text-[11px] tracking-wider uppercase">
          {currentChapter}
        </div>
      </div>

      {/* Interactive Guidance Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 font-mono text-[10px] text-slate-500 tracking-widest uppercase pointer-events-none hidden sm:block">
        USE MOUSE WHEEL OR DRAG SLIDER TO WALK THROUGH 3D CORRIDORS
      </div>
    </div>
  );
}
