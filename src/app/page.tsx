import { SPACING } from "@/constants/spacing";

export default function Card() {
  return (
    <div
      style={{
        padding: SPACING.cardPadding,
        marginBottom: SPACING.gapLG,
      }}
    >
      Card Content
    </div>
  );
}