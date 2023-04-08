module.exports = {
 testIgnorePatterns:["/node_modules/", "/.next/"],
 setupFilesAfterEnv: [
  "<rootDir>/src/tests/setupTests.ts"
 ],
 transform:{
  '\\.(scss|sass)$': 'jest-transform-scss',
  "^.+\\.(js|jsx|ts|tsx)$" : "<rootDir>/node_modules/babel-jest"
 },
 moduleNameMapper: {
  '\\.(scss|sass)$': 'identity-obj-proxy',
},
 testEnvironment: 'jest-environment-jsdom'
}