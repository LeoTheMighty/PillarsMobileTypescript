import React from 'react';
import ViewStore from '../store/ViewStore';
import ConfirmationModal from './ConfirmationModal';

export const mountConfirmationModal = async (viewStore: ViewStore): Promise<boolean> => {
  viewStore.pushModal(
    <ConfirmationModal
      onChoose={(choice) => {
        viewStore.popModal();
      }}
    />
  );

  setInterval(() => {
  }, 99999);
};
