import { SynthOptions, useSynth } from "../hooks/useSynth";

type Props = {
  options?: SynthOptions;
  note: string;
};

export function SynthButton({ note, options }: Props) {
  const synth = useSynth(options);
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        synth.triggerAttackRelease(note, "8n");
      }}
    >
      {note}
    </button>
  );
}
