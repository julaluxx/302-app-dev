import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';

const MoodOption = ({ emoji, label, isSelected, onSelect }) => (
    <TouchableOpacity
        style={[styles.moodOption, isSelected && styles.moodOptionSelected]}
        onPress={() => onSelect(emoji, label)}
    >
        <Text style={styles.moodEmoji}>{emoji}</Text>
        <Text style={[styles.moodLabel, isSelected && styles.moodLabelSelected]}>{label}</Text>
    </TouchableOpacity>
);

const MoodItem = ({ item, onDelete }) => (
    <View style={styles.itemContainer}>
        <View style={styles.itemIcon}>
            <Text style={styles.itemEmoji}>{item.emoji}</Text>
        </View>
        <View style={styles.itemContent}>
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.itemTime}>{item.timestamp}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
            <Text style={styles.deleteText}>🗑️</Text>
        </TouchableOpacity>
    </View>
);

const MoodTracker = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [moodHistory, setMoodHistory] = useState([]);

    const moodOptions = [
        { emoji: '😁', label: 'Happy' },
        { emoji: '😐', label: 'Neutral' },
        { emoji: '😔', label: 'Sad' },
        { emoji: '😡', label: 'Angry' },
        { emoji: '😴', label: 'Tired' },
    ];

    const handleSelectMood = (emoji, label) => {
        setSelectedMood({ emoji, label });
    };

    const addMood = () => {
        if (selectedMood) {
            const newMood = {
                id: Date.now().toString(),
                emoji: selectedMood.emoji,
                label: selectedMood.label,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMoodHistory([newMood, ...moodHistory]);
            setSelectedMood(null);
        }
    };

    const deleteMood = (id) => {
        setMoodHistory(prev => prev.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.title}>Mood Tracker</Text>
                <Text style={styles.subtitle}>Programmer: Julalak Kinnara</Text>
            </View>

            <View style={styles.selectorContainer}>
                <Text style={styles.sectionTitle}>How are you feeling?</Text>
                <View style={styles.optionsRow}>
                    {moodOptions.map((option) => (
                        <MoodOption
                            key={option.label}
                            emoji={option.emoji}
                            label={option.label}
                            isSelected={selectedMood?.label === option.label}
                            onSelect={handleSelectMood}
                        />
                    ))}
                </View>
                <TouchableOpacity
                    style={[styles.addButton, !selectedMood && styles.addButtonDisabled]}
                    onPress={addMood}
                    disabled={!selectedMood}
                >
                    <Text style={styles.addButtonText}>Save Mood</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.sectionTitle}>Recent Moods</Text>
                <FlatList
                    data={moodHistory}
                    renderItem={({ item }) => <MoodItem item={item} onDelete={deleteMood} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No moods recorded yet</Text>
                        </View>
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF3E0',
        paddingTop: 60,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E65100',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#FB8C00',
        fontWeight: '500',
    },
    selectorContainer: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#EF6C00',
        marginBottom: 15,
        marginLeft: 5,
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    moodOption: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        minWidth: 60,
        shadowColor: '#FFB74D',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    moodOptionSelected: {
        backgroundColor: '#FFE0B2',
        borderWidth: 2,
        borderColor: '#FF9800',
        transform: [{ scale: 1.1 }],
    },
    moodEmoji: {
        fontSize: 28,
        marginBottom: 5,
    },
    moodLabel: {
        fontSize: 12,
        color: '#90A4AE',
    },
    moodLabelSelected: {
        color: '#E65100',
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#FF9800',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        shadowColor: '#F57C00',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    addButtonDisabled: {
        backgroundColor: '#FFCC80',
        opacity: 0.7,
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
    },
    listContent: {
        paddingBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 15,
        borderRadius: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F5F5F5',
    },
    itemIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF8E1',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    itemEmoji: {
        fontSize: 24,
    },
    itemContent: {
        flex: 1,
    },
    itemLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#424242',
        marginBottom: 2,
    },
    itemTime: {
        fontSize: 12,
        color: '#BDBDBD',
    },
    deleteButton: {
        padding: 5,
        marginLeft: 10,
    },
    deleteText: {
        fontSize: 18,
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    emptyText: {
        color: '#CFD8DC',
        fontSize: 16,
        fontStyle: 'italic',
    },
});

export default MoodTracker;