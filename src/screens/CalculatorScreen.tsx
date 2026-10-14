import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontFamily, radii, spacing, typography } from '../theme';

/**
 * The one screen of the app.
 *
 * Scaffold stub: the amount field is the single real, kept control — it holds
 * what the user types. The percent and people fields, the live results and the
 * validation feedback are built by the calculator-screen ticket.
 */
export default function CalculatorScreen() {
  const [amount, setAmount] = useState('');

  return (
    <SafeAreaView style={styles.safe} testID="screen-calculator">
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Trinkgeld-Rechner</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Betrag</Text>
          <TextInput
            testID="input-amount"
            accessibilityLabel="Betrag"
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            placeholder="0,00"
            placeholderTextColor={colors.muted}
            keyboardType="decimal-pad"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingTop: spacing.space4,
    paddingBottom: spacing.space5,
    paddingHorizontal: spacing.space3 + spacing.space0,
  },
  title: {
    fontFamily,
    fontSize: typography.sizeTitle,
    fontWeight: typography.headingWeight,
    color: colors.fg,
    lineHeight: typography.sizeTitle * 1.2,
    marginBottom: spacing.space4,
  },
  field: {
    marginBottom: spacing.space3,
  },
  label: {
    fontFamily,
    fontSize: typography.sizeLabel,
    fontWeight: typography.labelWeight,
    color: colors.fg,
    marginBottom: spacing.space1,
  },
  input: {
    fontFamily,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingVertical: 14,
    paddingHorizontal: spacing.space3,
    fontSize: typography.sizeInput,
    fontWeight: typography.bodyWeight,
    color: colors.fg,
    minHeight: 48,
  },
});
