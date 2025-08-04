"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Icosahedron, Dodecahedron, Tetrahedron } from "@react-three/drei"
import type * as THREE from "three"

// Geometric constellation
function GeometricConstellation() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Create a constellation of connected geometric shapes */}
      <Icosahedron position={[0, 0, 0]} scale={0.3}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} wireframe />
      </Icosahedron>

      <Dodecahedron position={[2, 1, -1]} scale={0.2}>
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} wireframe />
      </Dodecahedron>

      <Tetrahedron position={[-2, -1, 1]} scale={0.4}>
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} wireframe />
      </Tetrahedron>

      <Icosahedron position={[1, -2, -2]} scale={0.25}>
        <meshStandardMaterial color="#ec4899" transparent opacity={0.6} wireframe />
      </Icosahedron>

      {/* Connection lines */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={8}
            array={new Float32Array([0, 0, 0, 2, 1, -1, 0, 0, 0, -2, -1, 1, 0, 0, 0, 1, -2, -2, 2, 1, -1, 1, -2, -2])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.3} />
      </line>
    </group>
  )
}

// Floating data nodes
function DataNode({ position, color }: any) {
  const nodeRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (nodeRef.current) {
      nodeRef.current.rotation.x += 0.01
      nodeRef.current.rotation.y += 0.015
      nodeRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5
    }
  })

  return (
    <Icosahedron ref={nodeRef} position={position} scale={0.15}>
      <meshStandardMaterial color={color} transparent opacity={0.8} emissive={color} emissiveIntensity={0.1} />
    </Icosahedron>
  )
}

export default function Features3DBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#8b5cf6" />

        {/* Main constellation */}
        <GeometricConstellation />

        {/* Scattered data nodes */}
        <DataNode position={[-4, 2, -2]} color="#3b82f6" />
        <DataNode position={[4, -1, -3]} color="#8b5cf6" />
        <DataNode position={[-2, -3, -1]} color="#06b6d4" />
        <DataNode position={[3, 3, -4]} color="#ec4899" />
        <DataNode position={[0, -2, -5]} color="#10b981" />
        <DataNode position={[-3, 1, -2]} color="#f59e0b" />
      </Canvas>
    </div>
  )
}
