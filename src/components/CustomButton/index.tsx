import React, { useEffect, useMemo, useRef, useState } from 'react';

import Spinner from '@/components/Spinner';

import s from './style.module.scss';

export enum BtnVariant {
  CONTAINED = 'contained',
  GRADIENT = 'gradient',
  OUTLINED = 'outlined',
}

interface CustomButtonProps {
  icon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSelected?: boolean;
  onClick: () => void;
  text?: string;
  variant: BtnVariant;
}

export function CustomButton({ icon, isDisabled = false, isLoading = false, isSelected = false, onClick, text, variant }: CustomButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonSize, setButtonSize] = useState({ width: 'auto', height: 'auto' });
  const [spinnerSize, setSpinnerSize] = useState(0);

  const selected = useMemo(() => (variant === BtnVariant.OUTLINED && isSelected ? s.selected : ''), [variant, isSelected]);

  useEffect(() => {
    if (buttonRef.current && !isLoading) {
      const { offsetWidth, offsetHeight } = buttonRef.current;
      const computedStyle = getComputedStyle(buttonRef.current);
      const paddingY = parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
      setButtonSize({ width: `${offsetWidth}px`, height: `${offsetHeight}px` });

      const spinnerHeight = variant === BtnVariant.GRADIENT ? offsetHeight - 15 : offsetHeight - paddingY - 2;
      setSpinnerSize(spinnerHeight);
    }
  }, [text, icon, isLoading, variant]);

  const buttonStyle = useMemo(() => {
    if (isLoading) {
      return { width: buttonSize.width, height: buttonSize.height };
    }
    if (variant === BtnVariant.GRADIENT) {
      return { width: '100%', height: '100%' };
    }
    return { width: 'fit-content', height: 'fit-content' };
  }, [isLoading, buttonSize, variant]);

  return (
    <button
      type="button"
      disabled={isDisabled || isLoading}
      onClick={onClick}
      className={`${s.button} ${selected}`}
      data-variant={variant}
      style={buttonStyle}
      ref={buttonRef}
    >
      {isLoading ? (
        <Spinner size={spinnerSize} />
      ) : (
        <div className={s.content}>
          {icon}
          {text}
        </div>
      )}
    </button>
  );
}
