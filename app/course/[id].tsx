import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';

const sections = [
    {
        title: 'I - Introduction',
        lessons: [
            { id: 1, title: 'Amet adipisicing consectetur', duration: '01:23 mins', unlocked: true },
            { id: 2, title: 'Adipisicing dolor amet occaec', duration: '01:23 mins', unlocked: true },
        ],
    },
    {
        title: 'II - Plan for your UX Research',
        lessons: [
            { id: 3, title: 'Exercitation elit incididunt esse', duration: '01:23 mins', unlocked: false },
            { id: 4, title: 'Duis esse ipsum laboris', duration: '01:23 mins', unlocked: false },
            { id: 5, title: 'Labore minim pariatur ea deserunt', duration: '01:23 mins', unlocked: false },
        ],
    },
    {
        title: 'III - Conduct UX research',
        lessons: [],
    },
    {
        title: 'IV - Articulate findings',
        lessons: [],
    },
];

export default function CourseDetailScreen() {
    const { title } = useLocalSearchParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('LESSONS');
    const [expandedSections, setExpandedSections] = useState<number[]>([0, 1]);

    const toggleSection = (index: number) => {
        setExpandedSections((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const handleLessonPress = (lessonId: number, unlocked: boolean) => {
        if (unlocked) {
            router.push({
                pathname: '/lessons/[id]',
                params: { id: lessonId.toString() },
            });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Hero */}
                <View style={styles.hero}>
                    <View style={styles.playButton}>
                        <Ionicons name="play-circle" size={48} color="white" />
                    </View>
                </View>

                {/* Info */}
                <View style={styles.info}>
                    <Text style={styles.subtitle}>UX Foundations</Text>
                    <Text style={styles.title}>{title ?? 'Introduction to UX Design'}</Text>
                    <Text style={styles.description}>UX Foundation: Introduction to User Experience Design</Text>
                    <Text style={styles.meta}>⭐ 4.5 (1233) • 12 lessons</Text>
                </View>

                {/* Tabs */}
                <View style={styles.tabs}>
                    {['OVERVIEW', 'LESSONS', 'REVIEW'].map((tab) => (
                        <Pressable key={tab} onPress={() => setActiveTab(tab)} style={styles.tab}>
                            <Text style={[styles.tabText, activeTab === tab && styles.tabActive]}>{tab}</Text>
                            {activeTab === tab && <View style={styles.underline} />}
                        </Pressable>
                    ))}
                </View>

                {/* LESSONS Tab */}
                {activeTab === 'LESSONS' &&
                    sections.map((section, index) => (
                        <View key={section.title} style={styles.section}>
                            <TouchableOpacity onPress={() => toggleSection(index)}>
                                <Text style={styles.sectionTitle}>{section.title}</Text>
                            </TouchableOpacity>
                            {expandedSections.includes(index) && section.lessons.length === 0 && (
                                <Text style={{ color: '#888' }}>No lessons available yet.</Text>
                            )}
                            {expandedSections.includes(index) &&
                                section.lessons.map((lesson) => (
                                    <TouchableOpacity
                                        key={lesson.id}
                                        onPress={() => handleLessonPress(lesson.id, lesson.unlocked)}
                                        disabled={!lesson.unlocked}
                                        style={styles.lesson}
                                    >
                                        <View style={styles.lessonLeft}>
                                            <Text style={styles.lessonIndex}>{lesson.id.toString().padStart(2, '0')}</Text>
                                            <Text style={styles.lessonTitle}>{lesson.title}</Text>
                                        </View>
                                        <View style={styles.lessonRight}>
                                            <Text style={styles.lessonTime}>{lesson.duration}</Text>
                                            {lesson.unlocked ? (
                                                <Ionicons name="checkmark" size={18} color="#000" />
                                            ) : (
                                                <Feather name="lock" size={16} color="#999" />
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                ))}
                        </View>
                    ))}

                {/* OVERVIEW Tab */}
                {activeTab === 'OVERVIEW' && (
                    <View style={styles.overview}>
                        <View style={styles.instructor}>
                            <Ionicons name="person-circle-outline" size={48} color="#555" />
                            <View style={{ flex: 1, marginLeft: 12 }}>
                                <Text style={styles.instructorName}>Sara Welse</Text>
                                <Text style={styles.instructorTitle}>UI/UX Designer</Text>
                            </View>
                            <TouchableOpacity style={styles.followButton}>
                                <Text style={styles.followText}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.sectionLabel}>Description</Text>
                        <Text style={styles.paragraph}>
                            Convallis in semper laoreet nibh leo. Vivamus malesuada ipsum pulvinar non rutrum risus dui,
                            risus. Purus massa velit iaculis tincidunt tortor, iaculis scelerisque risus…
                        </Text>

                        <Text style={styles.sectionLabel}>Benefits</Text>
                        {[
                            '14 hours on-demand video',
                            'Native teacher',
                            '100% free document',
                            'Full lifetime access',
                            'Certificate of complete',
                            '24/7 support',
                        ].map((benefit, idx) => (
                            <View key={idx} style={styles.benefit}>
                                <Ionicons name="checkmark-done-outline" size={16} color="#4CAF50" />
                                <Text style={styles.benefitText}>{benefit}</Text>
                            </View>
                        ))}

                        <Text style={styles.sectionLabel}>Similar courses</Text>
                        {[
                            { title: 'Product Design', author: 'Dennis Sweeney', price: '$90' },
                            { title: 'Palettes for Your APP', author: 'Ramono Wultschner', price: '$59' },
                            { title: 'Mobile UI Design', author: 'Ramono Wultschner', price: '$32' },
                        ].map((course, idx) => (
                            <View key={idx} style={styles.similarCard}>
                                <View style={styles.similarThumbnail} />
                                <View style={{ flex: 1, marginLeft: 12 }}>
                                    <Text style={styles.similarTitle}>{course.title}</Text>
                                    <Text style={styles.similarAuthor}>{course.author}</Text>
                                    <Text style={styles.similarMeta}>
                                        {course.price} • ⭐ 4.5 (1233) • 12 lessons
                                    </Text>
                                </View>
                                <Feather name="bookmark" size={20} color="#999" />
                            </View>
                        ))}
                    </View>
                )}

                {/* REVIEW Tab */}
                {activeTab === 'REVIEW' && (
                    <View style={styles.review}>
                        <View style={styles.reviewHeader}>
                            <Text style={styles.ratingScore}>⭐ 4.5/5</Text>
                            <Text style={styles.reviewMeta}>(1233+ reviews)</Text>
                            <Pressable style={{ marginLeft: 'auto' }}>
                                <Text style={styles.viewAll}>View all</Text>
                            </Pressable>
                        </View>

                        <View style={styles.filterRow}>
                            {['All', '5', '4', '3', '2', '1'].map((label, index) => (
                                <TouchableOpacity key={index} style={[styles.filterBtn, index === 0 && styles.filterBtnActive]}>
                                    <Text style={[styles.filterText, index === 0 && styles.filterTextActive]}>
                                        ⭐ {label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {[
                            {
                                name: 'Jinny Oslin',
                                time: 'A day ago',
                                rating: 5,
                                comment: 'Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod elit sint laborum',
                            },
                            {
                                name: 'Jane Barry',
                                time: 'A day ago',
                                rating: 5,
                                comment: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est',
                            },
                            {
                                name: 'Claire Mignard',
                                time: '5 days ago',
                                rating: 4,
                                comment: 'Magna id sint irure in cillum esse nisi dolor laboris ullamco. Consectetur proident …',
                            },
                        ].map((review, idx) => (
                            <View key={idx} style={styles.reviewCard}>
                                <View style={styles.reviewUser}>
                                    <Ionicons name="person-circle-outline" size={40} color="#999" />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.reviewerName}>{review.name}</Text>
                                        <Text style={styles.reviewerTime}>{review.time}</Text>
                                    </View>
                                    <View style={{ marginLeft: 'auto', flexDirection: 'row' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Ionicons
                                                key={i}
                                                name={i < review.rating ? 'star' : 'star-outline'}
                                                size={14}
                                                color="#FFD700"
                                            />
                                        ))}
                                    </View>
                                </View>
                                <Text style={styles.reviewText}>{review.comment}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.price}>$259</Text>
                    <Text style={styles.discount}>80% Disc. <Text style={styles.originalPrice}>1020$</Text></Text>
                </View>
                <TouchableOpacity style={styles.cartButton}>
                    <Ionicons name="cart" size={16} color="#fff" />
                    <Text style={styles.cartText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    hero: { height: 200, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' },
    playButton: { backgroundColor: '#00000060', borderRadius: 60, padding: 4 },
    info: { padding: 16 },
    subtitle: { color: '#888', fontSize: 14, marginBottom: 4 },
    title: { fontSize: 22, fontWeight: 'bold', color: '#000', marginBottom: 6 },
    description: { fontSize: 14, color: '#555', marginBottom: 4 },
    meta: { color: '#666', fontSize: 13 },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    tab: { paddingVertical: 12, alignItems: 'center' },
    tabText: { color: '#999', fontSize: 14 },
    tabActive: { color: '#000', fontWeight: '600' },
    underline: { height: 2, backgroundColor: '#000', width: '100%', marginTop: 4 },
    section: { paddingHorizontal: 16, marginTop: 16 },
    sectionTitle: { color: '#000', fontWeight: 'bold', fontSize: 15, marginBottom: 10 },
    lesson: {
        backgroundColor: '#f8f8f8',
        padding: 12,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    lessonLeft: { flexDirection: 'row', gap: 10, alignItems: 'center' },
    lessonIndex: { color: '#333', fontWeight: '600' },
    lessonTitle: { color: '#000', fontSize: 14 },
    lessonRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    lessonTime: { color: '#666', fontSize: 12 },
    footer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        paddingBottom: 60
    },
    price: { color: '#000', fontSize: 20, fontWeight: 'bold' },
    discount: { color: '#666', fontSize: 12 },
    originalPrice: { textDecorationLine: 'line-through', color: '#aaa' },
    cartButton: {
        backgroundColor: '#007bff',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    cartText: { color: '#fff', fontWeight: '600' },

    // Overview Tab
    overview: { padding: 16 },
    instructor: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    instructorName: { color: '#000', fontWeight: '600', fontSize: 16 },
    instructorTitle: { color: '#666', fontSize: 13 },
    followButton: {
        backgroundColor: '#000',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    followText: { fontSize: 12, fontWeight: '600', color: '#fff' },
    sectionLabel: { color: '#000', fontWeight: 'bold', fontSize: 15, marginTop: 20, marginBottom: 8 },
    paragraph: { color: '#444', fontSize: 14, lineHeight: 20 },
    benefit: { flexDirection: 'row', alignItems: 'center', gap: 8, marginVertical: 4 },
    benefitText: { color: '#444', fontSize: 14 },
    similarCard: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        padding: 12,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    similarThumbnail: { width: 50, height: 50, backgroundColor: '#ccc', borderRadius: 4 },
    similarTitle: { color: '#000', fontWeight: '600', fontSize: 14 },
    similarAuthor: { color: '#666', fontSize: 13 },
    similarMeta: { color: '#999', fontSize: 12 },

    // Review Tab
    review: { padding: 16 },
    reviewHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
    ratingScore: { color: '#000', fontWeight: '600', fontSize: 16 },
    reviewMeta: { color: '#666', fontSize: 12, marginLeft: 8 },
    viewAll: { color: '#007bff', fontSize: 13, fontWeight: '500' },
    filterRow: { flexDirection: 'row', gap: 8, marginBottom: 16, flexWrap: 'wrap' },
    filterBtn: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    filterBtnActive: { backgroundColor: '#000' },
    filterText: { color: '#666', fontSize: 12 },
    filterTextActive: { color: '#fff' },
    reviewCard: {
        backgroundColor: '#f8f8f8',
        padding: 12,
        marginBottom: 12,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    reviewUser: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
    reviewerName: { color: '#000', fontWeight: '600', fontSize: 14 },
    reviewerTime: { color: '#888', fontSize: 12 },
    reviewText: { color: '#444', fontSize: 13, lineHeight: 18 },
});
