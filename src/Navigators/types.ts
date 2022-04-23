import type {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  BeforeAuth: NavigatorScreenParams<BeforeAuthParamList>;
  AfterAuth: NavigatorScreenParams<AfterAuthParamList>;
  Loader: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BeforeAuthParamList = {
  Welcome: undefined;
  SignIn: undefined;
};

export type BeforeAuthScreenProps<T extends keyof BeforeAuthParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<BeforeAuthParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type AfterAuthParamList = {
  Dashboard: undefined;
  Posts: {userId: number};
};

export type AfterAuthScreenProps<T extends keyof AfterAuthParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AfterAuthParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
