"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Torus } from "@react-three/drei"
import type * as THREE from "three"

// Animated grid
function AnimatedGrid() {
  const gridRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      gridRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <group ref={gridRef}>
      <gridHelper args={[20, 20, "#3b82f6", "#1e40af"]} position={[0, -5, 0]} />
    </group>
  )
}

// Floating orbs
function FloatingOrb({ position, color, speed }: any) {
  const orbRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 2
      orbRef.current.rotation.x += 0.01
      orbRef.current.rotation.y += 0.02
    }
  })

  return (
    <Sphere ref={orbRef} position={position} scale={0.3}>
      <meshStandardMaterial color={color} transparent opacity={0.7} emissive={color} emissiveIntensity={0.2} />
    </Sphere>
  )
}

// Rotating rings
function RotatingRing({ position, color, speed }: any) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.01 * speed
      ringRef.current.rotation.y += 0.02 * speed
      ringRef.current.rotation.z += 0.005 * speed
    }
  })

  return (
    <Torus ref={ringRef} position={position} args={[1, 0.1, 16, 100]} scale={0.8}>
      <meshStandardMaterial color={color} transparent opacity={0.4} wireframe />
    </Torus>
  )
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

        {/* Animated grid */}
        <AnimatedGrid />

        {/* Floating orbs */}
        <FloatingOrb position={[-6, 0, -2]} color="#3b82f6" speed={0.8} />
        <FloatingOrb position={[6, 2, -3]} color="#8b5cf6" speed={1.2} />
        <FloatingOrb position={[-3, -2, -1]} color="#06b6d4" speed={0.6} />
        <FloatingOrb position={[4, -1, -4]} color="#ec4899" speed={1.0} />

        {/* Rotating rings */}
        <RotatingRing position={[-4, 3, -5]} color="#3b82f6" speed={0.5} />
        <RotatingRing position={[5, -2, -3]} color="#8b5cf6" speed={0.8} />
        <RotatingRing position={[0, 1, -6]} color="#06b6d4" speed={0.3} />
      </Canvas>
    </div>
  )
}
