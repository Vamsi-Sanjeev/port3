import React, { createContext, useContext, useState, useEffect } from 'react';

type ColorTemplate = 'modern' | 'classic' | 'minimal';

interface ThemeContextType {
  template: ColorTemplate;
  setTemplate: (template: ColorTemplate) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const templates = {
  modern: {
    primary: '#3563E9',
    secondary: '#8E33FF',
    accent: '#06D6A0',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    muted: '#94A3B8'
  },
  classic: {
    primary: '#2563EB',
    secondary: '#7C3AED',
    accent: '#059669',
    background: '#18181B',
    surface: '#27272A',
    text: '#FAFAFA',
    muted: '#A1A1AA'
  },
  minimal: {
    primary: '#0EA5E9',
    secondary: '#6366F1',
    accent: '#10B981',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    muted: '#9CA3AF'
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [template, setTemplate] = useState<ColorTemplate>('modern');

  useEffect(() => {
    const root = document.documentElement;
    const colors = templates[template];
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [template]);

  return (
    <ThemeContext.Provider value={{ template, setTemplate }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};