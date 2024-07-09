module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    './eslint/react.js',
    './eslint/typescript.js',
    './eslint/import.js',
    './eslint/prettier.js',
    // 'plugin:stylelint/recommended',
    'next/core-web-vitals',
  ],
  plugins: ['stylelint'],
  rules: {
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/function-component-definition': 'off', // 컴포넌트 function 함수 강제화
    'jsx-a11y/anchor-is-valid': 'off', // 유효하지 않은 href 사용 금지
    '@typescript-eslint/no-unsafe-return': 'off', // any return 금지
    '@typescript-eslint/no-unsafe-argument': 'off', // any argument 금지
    '@typescript-eslint/no-explicit-any': 'off', // any 금지a
    '@typescript-eslint/no-unsafe-member-access': 'off', // any member 접근 금지
    'no-extraneous-dependencies': 'off', // devDependencies 사용 가능
    'arrow-body-style': 'off', // 화살표 함수 body 스타일
    'jsx-no-useless-fragment': 'off', // 불필요한 fragment 사용 금지
    '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수 경고
    'jsx-a11y/no-static-element-interactions': 'off', // div에 onClick 이벤트 사용 가능
    'no-console': ['warn', { allow: ['warn', 'error'] }], // console.log() 금지
    'dot-notation': 'warn', // 가능하다면 dot notation 사용
    'no-unused-vars': 'warn', // 사용하지 않는 변수 금지
    'react/destructuring-assignment': 'warn', // state, prop 등에 구조분해 할당 적용
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase로
    'react/no-unused-state': 'warn', // 사용되지 않는 state
    'react/jsx-key': 'warn', // 반복문으로 생성하는 요소에 key 강제
    'react/self-closing-comp': 'warn', // 셀프 클로징 태그 가능하면 적용
    // 'stylelint/selector-class-pattern': [
    //   '^[a-z][a-zA-Z0-9]+$',
    //   {
    //     message: 'Expected class selector to be PascalCase',
    //   },
    // ],
  },
};
