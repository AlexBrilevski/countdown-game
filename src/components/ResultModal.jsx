import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(({ timeRemaining, targetTime, onReset }, ref) => {
  const dialog = useRef();

  const userLost = timeRemaining <= 0;
  const formattedTime = (timeRemaining / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      <p>The target time was <strong>{targetTime} seconds</strong>.</p>
      <p>You stopped the timer with <strong>{formattedTime} seconds left</strong>.</p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
