/**
 * Prevents browser and synthetic event bubbling
 * @param event {object} - any browser or synthetic event
 */
export function stopEventPropagation(event) {
  event.stopPropagation();
  if (event.nativeEvent) {
    event.nativeEvent.stopImmediatePropagation();
  }
}
