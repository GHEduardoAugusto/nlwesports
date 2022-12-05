import React from 'react';

import * as S from './styles';

interface Props {
  label: string;
  value: string;
}

const DuoInfo = ({ label, value }: Props) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Value numberOfLines={1}>{value}</S.Value>
    </S.Container>
  );
};
export default DuoInfo;
