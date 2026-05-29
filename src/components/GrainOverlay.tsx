type GrainOverlayProps = {
  className?: string;
};

export default function GrainOverlay({ className = "" }: GrainOverlayProps) {
  return <div className={`grain ${className}`} />;
}
