import { useRef } from "react";
import { Synth } from "tone";

export type SynthOptions = ConstructorParameters<typeof Synth>[0];

export function useSynth(options: SynthOptions = {}) {
  const synth = useRef<Synth>(new Synth(options).toDestination());

  return synth.current;
}
