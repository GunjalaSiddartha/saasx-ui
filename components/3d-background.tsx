"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Box, Torus, Octahedron } from "@react-three/drei"
import type * as THREE from "three"

// Floating geometric shape component
function FloatingShape({ position, geometry, color, speed = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  const ShapeComponent = geometry

  return (
    <ShapeComponent ref={meshRef} position={position} scale={0.5}>
      <meshStandardMaterial color={color} transparent opacity={0.6} roughness={0.4} metalness={0.6} />
    </ShapeComponent>
  )
}

// Particle system
function Particles() {
  const points = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05
      points.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

// Main 3D background component
export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

        {/* Floating geometric shapes */}
        <FloatingShape position={[-4, 2, -5]} geometry={Sphere} color="#3b82f6" speed={0.8} />
        <FloatingShape position={[4, -2, -3]} geometry={Box} color="#8b5cf6" speed={1.2} />
        <FloatingShape position={[-2, -3, -4]} geometry={Torus} color="#06b6d4" speed={0.6} />
        <FloatingShape position={[3, 3, -6]} geometry={Octahedron} color="#ec4899" speed={1.0} />
        <FloatingShape position={[0, 0, -8]} geometry={Sphere} color="#10b981" speed={0.4} />

        {/* Particle system */}
        <Particles />
      </Canvas>
    </div>
  )
}
