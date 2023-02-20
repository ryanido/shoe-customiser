/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shoe.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref= {group}{...props} dispose={null} scale = {3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color ={"red"}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}  material-color = {"blue"}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color = {"blue"} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color = {"blue"} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color = {"blue"} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color = {"blue"} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color = {"blue"} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color = {"blue"} />
    </group>
  )
}

