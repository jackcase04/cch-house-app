import { useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, Image, Modal } from 'react-native';
import styles from './header.style';
import icons from '../../constants/icons';

// This is a custom header
// Users can click on the menu button to toggle a modal with a logout button

const Header = ({ handleLogout, userName }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <SafeAreaView>
            <View style={styles.button}>
                <TouchableOpacity onPress={toggleMenu}>
                <Image 
                    source={icons.menu}
                    style={styles.menu}
                />
                </TouchableOpacity>
            </View>
            <Modal
                visible={showMenu}
                transparent={true}
                animationType="fade"
            >
                {/* rest of the screen */}
                <TouchableOpacity 
                    style={styles.modalOverlay}
                    activeOpacity={1} 
                    onPress={toggleMenu}
                >
                    {/* menu area */}
                    <TouchableOpacity
                        style={styles.modalContent}
                        activeOpacity={1}
                        onPress={(e) => e.stopPropagation()}
                    >
                        <View style={styles.menuHeader}>
                            <View style={styles.ccf_logo_container}>
                                <Image
                                    source={icons.ccflogo1}
                                    style={styles.ccf_logo}
                                    resizeMode='contain'
                                />
                            </View>
                            <View>
                                <Text style={styles.appTitle}>CCH App</Text>
                                <Text style={styles.userText}>User: {userName}</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={handleLogout}
                            style={styles.logoutButton}
                        >
                            <Text style={styles.logoutText}>Logout</Text>
                            <Image
                                source={icons.unlock}
                                style={styles.menuIcon}
                            />
                        </TouchableOpacity>
                        
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}

export default Header;