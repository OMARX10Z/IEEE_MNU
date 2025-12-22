# 👥 Team Page Documentation

> **File:** `src/pages/Team.jsx`
> **What it does:** Shows all team members with cool 3D lanyard cards and floating photos!

---

## 🎬 The Big Picture

The Team page is like a **digital ID card showcase** 🪪:
- Floating member photos in the hero section
- Tabbed navigation between committees
- 3D lanyard-style member cards
- Member benefits section

---

## 🧩 Components Breakdown

### 1. Image Preloading - The "Prepare Everything" Pattern

```jsx
// Collect ALL member images
const ALL_TEAM_IMAGES = Object.values(TEAM_MEMBERS).flatMap(committee => 
  committee.members.filter(m => m.image).map(m => m.image)
);

const Team = () => {
  const { isLoading } = usePageLoader(ALL_TEAM_IMAGES, 300);

  if (isLoading) {
    return <PageLoader title="Loading Team" color="teal" />;
  }
  // ... rest of component
};
```

**What's happening here?** 🤔

1. `Object.values(TEAM_MEMBERS)` = Get all committees as an array
2. `.flatMap()` = Map AND flatten (combine nested arrays)
3. `.filter(m => m.image)` = Only members with images
4. `.map(m => m.image)` = Extract just the image URLs

**Result:** An array of ALL image URLs to preload!

---

### 2. The Tab System - Switching Between Committees

```jsx
const [selectedCommittee, setSelectedCommittee] = useState('chairman');

const handleCommitteeClick = (committeeId) => {
  setSelectedCommittee(committeeId);
};
```

**State Management Explained:**

```
User clicks "Marketing" tab
        ↓
handleCommitteeClick('marketing') called
        ↓
setSelectedCommittee('marketing')
        ↓
React re-renders component
        ↓
currentCommittee = TEAM_MEMBERS['marketing']
        ↓
New members displayed!
```

**The Tab Button:**
```jsx
<button
  onClick={() => handleCommitteeClick(committeeId)}
  className={`${selectedCommittee === committeeId 
    ? 'bg-white text-ieee-blue'  // Active style
    : 'text-white/80 hover:bg-white/10'  // Inactive style
  }`}
>
  {committee.name}
</button>
```

---

### 3. Auto-Scrolling Tabs - UX Magic ✨

```jsx
useEffect(() => {
  if (selectedCommittee && tabButtonRefs.current[selectedCommittee]) {
    const container = tabsContainerRef.current;
    const activeButton = tabButtonRefs.current[selectedCommittee];
    
    const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
}, [selectedCommittee]);
```

**What this does:**
1. When `selectedCommittee` changes...
2. Find the active tab button
3. Calculate where to scroll so it's centered
4. Smoothly scroll the tabs container

**Why it's useful:**
- On mobile, tabs might overflow
- Active tab always stays visible
- Smooth scrolling feels professional

---

### 4. MemberCard3D - The Lanyard Effect 🪪

```jsx
<MemberCard3D
  member={selectedMember}
  showLanyard={showLanyard}
/>
```

This component creates a 3D card that looks like an ID badge on a lanyard!

**The 3D Effect (CSS Transform):**
```css
transform: perspective(1000px) rotateY(5deg) rotateX(-5deg);
```

- `perspective(1000px)` = How "deep" the 3D effect looks
- `rotateY(5deg)` = Slight rotation on Y axis
- `rotateX(-5deg)` = Slight rotation on X axis

---

### 5. Floating Photos - CSS Keyframe Animations

```jsx
<style>{`
  @keyframes float-0 { 
    0%, 100% { transform: translateY(0px) rotate(0deg); } 
    50% { transform: translateY(-20px) rotate(5deg); } 
  }
  @keyframes float-1 { 
    0%, 100% { transform: translateY(0px) rotate(0deg); } 
    50% { transform: translateY(-25px) rotate(-5deg); } 
  }
  // ... more variations
`}</style>
```

**Why multiple animations?**
- Each photo has a DIFFERENT float pattern
- Some go higher (-25px), some lower (-15px)
- Some rotate left, some right
- Creates organic, natural-looking movement

**Applying the animation:**
```jsx
<div
  style={{
    animation: `float-${index % 10} ${3 + index * 0.3}s ease-in-out infinite`,
    animationDelay: `${index * 0.2}s`
  }}
>
  <img src={member.image} />
</div>
```

- `float-${index % 10}` = Cycles through float-0 to float-9
- `${3 + index * 0.3}s` = Different duration for each (3s, 3.3s, 3.6s...)
- `animationDelay` = Staggered start times

---

### 6. Member Navigation - Previous/Next Buttons

```jsx
const navigateMember = (direction) => {
  const members = currentCommittee?.members || [];
  let newIndex;
  
  if (direction === 'prev') {
    // If at start, go to end (wrap around)
    newIndex = selectedMemberIndex <= 0 
      ? members.length - 1 
      : selectedMemberIndex - 1;
  } else {
    // If at end, go to start (wrap around)
    newIndex = selectedMemberIndex >= members.length - 1 
      ? 0 
      : selectedMemberIndex + 1;
  }
  
  setSelectedMemberIndex(newIndex);
};
```

**The Wrap-Around Logic:**
```
Members: [A, B, C, D]  (indices 0, 1, 2, 3)

At index 0, click "prev" → Go to index 3 (D)
At index 3, click "next" → Go to index 0 (A)
```

This creates an **infinite carousel** effect!

---

## 🔄 State Management

### Multiple Related States

```jsx
const [selectedCommittee, setSelectedCommittee] = useState('chairman');
const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
const [showLanyard, setShowLanyard] = useState(true);
```

**How they work together:**

```
selectedCommittee: 'marketing'
        ↓
currentCommittee = TEAM_MEMBERS['marketing']
        ↓
selectedMemberIndex: 2
        ↓
selectedMember = currentCommittee.members[2]
        ↓
showLanyard: true
        ↓
MemberCard3D shows with lanyard animation
```

### Resetting State on Committee Change

```jsx
useEffect(() => {
  setSelectedMemberIndex(0);  // Reset to first member
  setShowLanyard(true);       // Show lanyard again
}, [selectedCommittee]);
```

**Why?**
- When you switch committees, start fresh
- Don't try to show member index 5 if new committee only has 3 members!

---

## 📱 Responsive Design

### Hiding Elements on Mobile

```jsx
// Floating photos - hidden on mobile
className="absolute hidden sm:block"

// Full lanyard - hidden on mobile
className="hidden md:block"

// Simplified card - shown on mobile
className="block md:hidden"
```

**Why hide floating photos on mobile?**
- They would overlap with content
- Mobile screens are too small
- Performance is better without them

---

## 🎨 The Icon Mapping Pattern

```jsx
const iconMap = {
  BookOpen,
  Users,
  Award,
  Briefcase,
  Code,
  Globe,
};

// Usage:
const IconComponent = iconMap[benefit.icon];
<IconComponent className="w-6 h-6" />
```

**Why use this pattern?**
- Data (MEMBER_BENEFITS) stores icon NAME as string
- We need to render the actual COMPONENT
- Map converts string → component

```jsx
// In constants:
{ icon: 'BookOpen', title: 'Learning' }

// Becomes:
<BookOpen className="w-6 h-6" />
```

---

## 🚀 Performance Patterns

### 1. Refs for DOM Access

```jsx
const tabsContainerRef = useRef(null);
const tabButtonRefs = useRef({});

// Store refs for each tab button
ref={el => tabButtonRefs.current[committeeId] = el}
```

**Why use refs?**
- Direct DOM access without re-rendering
- Needed for scroll calculations
- Faster than querySelector

### 2. Optional Chaining

```jsx
const currentCommittee = TEAM_MEMBERS[selectedCommittee];
const selectedMember = currentCommittee?.members[selectedMemberIndex] || null;
```

**The `?.` operator:**
- If `currentCommittee` is undefined, don't crash
- Just return undefined instead
- `|| null` provides a fallback

---

## 🎓 Key React Concepts

### 1. Derived State

```jsx
// These are DERIVED from state, not state themselves
const currentCommittee = TEAM_MEMBERS[selectedCommittee];
const selectedMember = currentCommittee?.members[selectedMemberIndex];
const memberImages = getAllMemberImages();
```

**Rule:** Don't store in state what you can calculate from state!

### 2. Lifting State Up

The `selectedCommittee` state is in the parent (Team) component, not in each tab button. This allows:
- Tabs to know which is active
- Member display to know which committee
- Navigation to work correctly

### 3. Controlled Components

```jsx
<button
  onClick={() => handleCommitteeClick(committeeId)}
  className={selectedCommittee === committeeId ? 'active' : ''}
>
```

The button's appearance is CONTROLLED by React state, not by the DOM.

---

## 🤔 Common Questions

**Q: Why preload ALL team images, not just current committee?**
A: Users will likely browse multiple committees. Preloading all ensures smooth transitions!

**Q: Why use CSS keyframes instead of GSAP for floating?**
A: These are simple, infinite animations. CSS is more performant for continuous animations.

**Q: What's the difference between `useRef` and `useState`?**
A:
- `useState` = Triggers re-render when changed
- `useRef` = Does NOT trigger re-render, just stores a value

---

## 📊 Data Structure

```jsx
const TEAM_MEMBERS = {
  chairman: {
    name: 'Chairman',
    icon: Crown,
    members: [
      { id: 1, name: 'John Doe', role: 'Chairman', image: '/members/...' },
    ]
  },
  marketing: {
    name: 'Marketing',
    icon: Megaphone,
    members: [
      { id: 2, name: 'Jane Doe', role: 'Head', image: '/members/...' },
      { id: 3, name: 'Bob Smith', role: 'Vice', image: '/members/...' },
    ]
  },
  // ... more committees
};
```

**Nested structure allows:**
- Easy committee switching
- Grouped member display
- Scalable data management

---

Happy coding! 🚀
