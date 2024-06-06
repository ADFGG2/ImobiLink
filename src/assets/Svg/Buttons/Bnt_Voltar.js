import React from 'react'
import { View, TouchableOpacity } from 'react-native'

const ButtonVoltar = () => {
  return (
    <View style={{ flex: 1, marginTop: 54, marginLeft: 31, }}>

      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_1045_908)">
          <path d="M0 7C0 3.13401 3.13401 0 7 0H14H21C24.866 0 28 3.13401 28 7V21C28 24.866 24.866 28 21 28H7C3.13401 28 0 24.866 0 21V7Z" fill="black" fillOpacity="0.2" />
        </g>
        <path d="M16 20L10 14L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <filter id="filter0_b_1045_908" x="-222.4" y="-222.4" width="472.8" height="472.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="111.2" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1045_908" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1045_908" result="shape" />
          </filter>
        </defs>
      </svg>
      
    </View>
  )
}

export default ButtonVoltar;