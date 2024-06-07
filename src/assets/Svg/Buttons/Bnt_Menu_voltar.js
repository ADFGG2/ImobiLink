import React from 'react'
import { View, StyleSheet } from 'react-native'
import ModalTelaPrincipal from '../../components/modalTelaPrincipal/ModalTelaPrincipal';

const ButtonMenuVoltar = () => {
  return (
    <View style={{ flex: 1, marginTop: 54, marginHorizontal: 31, flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>

      <View style={{}}>
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

      <View style={{}}>
      <ModalTelaPrincipal />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 14.8572C0 15.3206 0.253271 16.0001 0.899091 16.0001H14.8571C15.4883 16.0001 16 15.4884 16 14.8572C16 14.226 15.4883 13.7144 14.8571 13.7144H0.899091C0.253271 13.7144 0 14.3939 0 14.8572Z" fill="white" />
          <path d="M0 10.2857C0 10.749 0.253271 11.4285 0.899091 11.4285H14.8571C15.4883 11.4285 16 10.9169 16 10.2857C16 9.6545 15.4883 9.14282 14.8571 9.14282H0.899091C0.253271 9.14282 0 9.82232 0 10.2857Z" fill="white" />
          <path d="M0 5.71439C0 6.17775 0.253271 6.85725 0.899091 6.85725H14.8571C15.4883 6.85725 16 6.34557 16 5.71439C16 5.08321 15.4883 4.57153 14.8571 4.57153H0.899091C0.253271 4.57153 0 5.25103 0 5.71439Z" fill="white" />
          <path d="M0 1.14286C0 1.60622 0.253271 2.28571 0.899091 2.28571H14.8571C15.4883 2.28571 16 1.77404 16 1.14286C16 0.511675 15.4883 0 14.8571 0H0.899091C0.253271 0 0 0.679495 0 1.14286Z" fill="white" />
        </svg>
      </View>

    </View>
  )
}

export default ButtonMenuVoltar;