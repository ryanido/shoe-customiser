/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shoe.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model({shoe, setActive}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')

  return (
    <group ref= {group} dispose={null} scale = {3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color ={shoe.laces} onClick={() => {setActive(0)}}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}  material-color = {shoe.mesh} onClick={() => {setActive(1)}}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color = {shoe.caps} onClick={() => {setActive(2)}}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color = {shoe.inner} onClick={() => {setActive(3)}}/>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color = {shoe.sole} onClick={() => {setActive(4)}}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color = {shoe.stripes} onClick={() => {setActive(5)}}/>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color = {shoe.band} onClick={() => {setActive(6)}}/>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color = {shoe.patch} onClick={() => {setActive(7)}} />
    </group>
  )
}

