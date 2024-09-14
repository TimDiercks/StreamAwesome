export const streamAwesomeVersionInfo = '3.0.0'

export type fontLicense = 'Free' | 'Pro'
export const fontAwesomeVersionInfo: {
  readonly fontFamilyBase: string
  readonly fontVersion: string
  fontLicense: fontLicense
} = {
  fontFamilyBase: 'Font Awesome 6',
  fontVersion: '6.6.0',
  fontLicense: 'Free'
}

export function setFontAwesomeLicense(fontLicense: fontLicense) {
  fontAwesomeVersionInfo.fontLicense = fontLicense
}
