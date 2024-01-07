import React from 'react';

const ChallengesContext = React.createContext();

export const ChallengesProvider = (props) => {
  const [showExplanation, setShowExplanation] = React.useState(false);

  const toggleExplanation = React.useCallback(() => {
    setShowExplanation((prevShowExplanation) => !prevShowExplanation);
  }, [setShowExplanation]);

  const value = {
    showExplanation,
    toggleExplanation,
  };

  return (
    <ChallengesContext.Provider value={ value }>
      { props.children }
    </ChallengesContext.Provider>
  );
}

export const useChallengesContext = () => {
  const context = React.useContext(ChallengesContext);
  if (!context) {
    throw new Error('Challenges context misconfigured');
  }

  return context;
};
