interface AnimationController extends Instance {
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	GetPlayingAnimationTracks(this: AnimationController): Array<AnimationTrack>;
	LoadAnimation(this: AnimationController, animation: Animation): AnimationTrack;
}

interface Animator extends Instance {
	LoadAnimation(this: Animator, animation: Animation): AnimationTrack;
}

/** @rbxts server */
interface AssetService extends Instance {
	CreatePlaceInPlayerInventoryAsync(
		this: AssetService,
		player: Player,
		placeName: string,
		templatePlaceID: number,
		description?: string,
	): number;
	GetGamePlacesAsync(this: AssetService): StandardPages;
	GetAssetIdsForPackage(this: AssetService, packageAssetId: number): Array<number>;
	GetBundleDetailsAsync(this: AssetService, bundleId: number): BundleInfo;
}

interface BasePart extends PVInstance {
	readonly TouchEnded: RBXScriptSignal<(otherPart: BasePart) => void>;
	readonly Touched: RBXScriptSignal<(otherPart: BasePart) => void>;
	CanCollideWith(this: BasePart, part: BasePart): boolean;
	GetConnectedParts(this: BasePart, recursive?: boolean): Array<BasePart>;
	GetRootPart(this: BasePart): BasePart;
	GetJoints(this: BasePart): Array<Constraint | JointInstance>;
	GetTouchingParts(this: BasePart): Array<BasePart>;
	/** @rbxts server */
	SubtractAsync(
		this: BasePart,
		parts: Array<BasePart>,
		collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>,
	): UnionOperation;
	/** @rbxts server */
	UnionAsync(
		this: BasePart,
		parts: Array<BasePart>,
		collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>,
	): UnionOperation;

	/** @rbxts server */
	CanSetNetworkOwnership(this: BasePart): LuaTuple<[boolean, string | undefined]>;
	/** @rbxts server */
	GetNetworkOwner(this: BasePart): Player | undefined;
	/** @rbxts server */
	SetNetworkOwner(this: BasePart, playerInstance?: Player): void;
	/** @rbxts server */
	GetNetworkOwnershipAuto(this: BasePart): boolean;
	/** @rbxts server */
	SetNetworkOwnershipAuto(this: BasePart): void;
}

interface Attachment extends Instance {
	WorldCFrame: CFrame;
}

interface BadgeService extends Instance {
	/** @rbxts server */
	AwardBadge(this: BadgeService, userId: number, badgeId: number): boolean;
	/** @rbxts server */
	GetBadgeInfoAsync(this: BadgeService, badgeId: number): BadgeInfo;
	/** @rbxts server */
	UserHasBadgeAsync(this: BadgeService, userId: number, badgeId: number): boolean;
}

interface TextService extends Instance {
	/** @rbxts server */
	FilterStringAsync(
		this: TextService,
		stringToFilter: string,
		fromUserId: number,
		textContext?: CastsToEnum<Enum.TextFilterContext>,
	): TextFilterResult | undefined;
}

interface BillboardGui extends LayerCollector {
	Adornee: PVInstance | Attachment | undefined;
	PlayerToHideFrom: Player | undefined;
}

interface BindableEvent extends Instance {
	readonly Event: RBXScriptSignal<(...arguments: Array<unknown>) => void, true>;
	Fire(this: BindableEvent, ...arguments: Array<unknown>): void;
}

interface BindableFunction extends Instance {
	OnInvoke: (...arguments: Array<unknown>) => any;
	Invoke(this: BindableFunction, ...arguments: Array<unknown>): Array<unknown>;
}

interface Camera extends Instance {
	CameraSubject: Humanoid | BasePart | undefined;
	GetPartsObscuringTarget(this: Camera, castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;
	WorldToScreenPoint(this: Camera, worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
	WorldToViewportPoint(this: Camera, worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
}

interface Chat extends Instance {
	readonly Chatted: RBXScriptSignal<(part: BasePart, message: string, color: Enum.ChatColor) => void>;
	Chat(this: Chat, partOrCharacter: BasePart | Model, message: string, color?: CastsToEnum<Enum.ChatColor>): void;
	FilterStringAsync(this: Chat, stringToFilter: string, playerFrom: Player, playerTo: Player): string;
	FilterStringForBroadcast(this: Chat, stringToFilter: string, playerFrom: Player): string;
}

interface ClickDetector extends Instance {
	readonly MouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
	readonly MouseHoverEnter: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	readonly MouseHoverLeave: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	readonly RightMouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
}

interface CollectionService extends Instance {
	GetInstanceAddedSignal(this: CollectionService, tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetInstanceRemovedSignal(this: CollectionService, tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetTagged<T extends Instance>(this: CollectionService, tag: string): Array<Instance>;
	GetTags(this: CollectionService, instance: Instance): Array<string>;
}

interface ContentProvider extends Instance {
	PreloadAsync(this: ContentProvider, contentIdList: Array<Instance>): void;
}

/** @rbxts client */
interface ContextActionService extends Instance {
	readonly LocalToolEquipped: RBXScriptSignal<(toolEquipped: Tool | Flag) => void>;
	readonly LocalToolUnequipped: RBXScriptSignal<(toolUnequipped: Tool | Flag) => void>;
	BindAction(
		this: ContextActionService,
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;

	BindActionAtPriority(
		this: ContextActionService,
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		priorityLevel: number,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;
	GetButton(this: ContextActionService, actionName: string): ImageButton | undefined;
	GetAllBoundActionInfo(this: ContextActionService): Map<string, BoundActionInfo>;
	GetBoundActionInfo(this: ContextActionService, actionName: string): BoundActionInfo;
}

/** @rbxts server */
interface DataStoreService extends Instance {
	GetDataStore(this: DataStoreService, name: string, scope?: string): GlobalDataStore;
	GetGlobalDataStore(this: DataStoreService): GlobalDataStore;
	GetOrderedDataStore(this: DataStoreService, name: string, scope?: string): OrderedDataStore;
}

interface Dialog extends Instance {
	readonly DialogChoiceSelected: RBXScriptSignal<(player: Player, dialogChoice: Dialog) => void>;
	GetCurrentPlayers(this: Dialog): Array<Player>;
}

interface FlagStand extends Part {
	readonly FlagCaptured: RBXScriptSignal<(player: Player) => void>;
}

interface GamePassService extends Instance {
	/** This item is deprecated. Do not use it for new work. */
	PlayerHasPass(this: GamePassService, player: Player, gamePassId: number): boolean;
}

interface PlayerGui extends BasePlayerGui {}

/** @rbxts server */
interface GlobalDataStore extends Instance {
	GetAsync<T = unknown>(this: GlobalDataStore, key: string): T | undefined;
	IncrementAsync(this: GlobalDataStore, key: string, delta?: number): number;
	RemoveAsync<T = unknown>(this: GlobalDataStore, key: string): T | undefined;
	SetAsync(this: GlobalDataStore, key: string, value?: any): void;
	UpdateAsync<O = unknown, R = unknown>(
		this: GlobalDataStore,
		key: string,
		transformFunction: (oldValue: O | undefined) => R,
	): R extends undefined ? O | undefined : R;
	OnUpdate<T = unknown>(this: GlobalDataStore, key: string, callback: (value: T) => void): RBXScriptConnection;
}

interface GroupService extends Instance {
	GetAlliesAsync(this: GroupService, groupId: number): StandardPages;
	GetEnemiesAsync(this: GroupService, groupId: number): StandardPages;
	GetGroupInfoAsync(this: GroupService, groupId: number): GroupInfo;
	GetGroupsAsync(this: GroupService, userId: number): Array<GetGroupsAsyncResult>;
}

/** @rbxts server */
interface MessagingService extends Instance {
	SubscribeAsync(
		this: MessagingService,
		topic: string,
		callback: (Data: any, Sent: number) => void,
	): RBXScriptConnection;
}

interface GuiObject extends GuiBase2d {
	readonly InputBegan: RBXScriptSignal<(input: InputObject) => void>;
	readonly InputChanged: RBXScriptSignal<(input: InputObject) => void>;
	readonly InputEnded: RBXScriptSignal<(input: InputObject) => void>;
	readonly TouchLongPress: RBXScriptSignal<(touchPositions: Array<Vector2>, state: Enum.UserInputState) => void>;
	readonly TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<Vector2>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState,
		) => void
	>;
	readonly TouchPinch: RBXScriptSignal<
		(touchPositions: Array<Vector2>, scale: number, velocity: number, state: Enum.UserInputState) => void
	>;
	readonly TouchRotate: RBXScriptSignal<
		(touchPositions: Array<Vector2>, rotation: number, velocity: number, state: Enum.UserInputState) => void
	>;
	readonly TouchTap: RBXScriptSignal<(touchPositions: Array<Vector2>) => void>;

	TweenPosition(
		this: GuiObject,
		endPosition: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;

	TweenSize(
		this: GuiObject,
		endSize: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;

	TweenSizeAndPosition(
		this: GuiObject,
		endSize: UDim2,
		endPosition: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;
}

/** @rbxts client */
interface GuiService extends Instance {
	AddSelectionParent(this: GuiService, selectionName: string, selectionParent: Instance): void;
	AddSelectionTuple(this: GuiService, selectionName: string, selections: Array<any>): void;
	InspectPlayerFromHumanoidDescription(
		this: GuiService,
		humanoidDescription: HumanoidDescription,
		name: string,
	): void;
	GetGuiInset(this: GuiService): LuaTuple<[Vector2, Vector2]>;
}

interface _HapticService extends Instance {
	GetMotor(
		this: _HapticService,
		inputType: CastsToEnum<Enum.UserInputType>,
		vibrationMotor: CastsToEnum<Enum.VibrationMotor>,
	): LuaTuple<[number]>;
	SetMotor(
		this: _HapticService,
		inputType: CastsToEnum<Enum.UserInputType>,
		vibrationMotor: CastsToEnum<Enum.VibrationMotor>,
		...vibrationValues: Array<number>
	): void;
}

interface HttpService extends Instance {
	/** @rbxts server */
	GetAsync(this: HttpService, url: string, nocache?: boolean, headers?: HttpHeaders): string;

	/** @rbxts server */
	PostAsync(
		this: HttpService,
		url: string,
		data: string,
		content_type?: CastsToEnum<Enum.HttpContentType>,
		compress?: boolean,
		headers?: HttpHeaders,
	): string;

	/** @rbxts server */
	RequestAsync(this: HttpService, requestOptions: RequestAsyncRequest): RequestAsyncResponse;

	JSONDecode<T>(this: HttpService, input: string): T;
}

interface Humanoid extends Instance {
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	readonly Seated: RBXScriptSignal<(active: boolean, currentSeatPart: Seat | VehicleSeat) => void>;
	readonly Touched: RBXScriptSignal<(touchingPart: BasePart, humanoidPart: BasePart) => void>;
	ApplyDescription(this: Humanoid, humanoidDescription: HumanoidDescription): void;
	GetAppliedDescription(this: Humanoid): HumanoidDescription;
	GetPlayingAnimationTracks(this: Humanoid): Array<AnimationTrack>;
	LoadAnimation(this: Humanoid, animation: Animation): AnimationTrack;
	AddAccessory(this: Humanoid, accessory: Accessory): void;
	EquipTool(this: Humanoid, tool: Tool | Flag): void;
	GetAccessories(this: Humanoid): Array<Accessory>;
	GetLimb(this: Humanoid, part: BasePart): Enum.Limb;
	GetBodyPartR15(this: Humanoid, part: BasePart): Enum.BodyPartR15;
	MoveTo(this: Humanoid, location: Vector3, part?: BasePart): void;
	ReplaceBodyPartR15(this: Humanoid, bodyPart: Enum.BodyPartR15, part: BasePart): boolean;
}

interface InsertService extends Instance {
	LoadAsset(this: InsertService, assetId: number): Model;
	LoadAssetVersion(this: InsertService, assetVersionId: number): Model;
	GetBaseSets(this: InsertService): Array<SetInfo>;
	GetCollection(this: InsertService, categoryId: number): Array<CollectionInfo>;
	GetFreeDecals(this: InsertService, searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetFreeModels(this: InsertService, searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetUserSets(this: InsertService, userId: number): Array<SetInfo>;
}

interface Instance {
	Clone(this: Instance): this;
	/** `Instance.Changed` has been intentionally excluded from the roblox-ts type system to maintain soundness with the ValueBase objects.
	 * Please intersect your type with the `ChangedSignal` global type to unsafely access the `Instance.Changed` event.
	 * @example
	 * function f(p: Part) {
	 * 	(p as Part & ChangedSignal).Changed.Connect(changedPropertyName => {})
	 * }
	 */
	Changed: unknown;
	GetChildren(this: Instance): Array<Instance>;
	GetDescendants(this: Instance): Array<Instance>;

	FindFirstAncestor(this: Instance, name: string): Instance | undefined;
	FindFirstChild(this: Instance, name: string, recursive?: boolean): Instance | undefined;
	WaitForChild(this: Instance, childName: string): Instance;
	WaitForChild(this: Instance, childName: string, timeOut: number): Instance | undefined;

	IsA<T extends keyof Instances>(this: Instance, className: T): this is Instances[T];
	IsA(this: Instance, className: string): boolean;

	FindFirstAncestorWhichIsA<T extends keyof Instances>(this: Instance, className: T): Instances[T] | undefined;
	FindFirstAncestorWhichIsA(this: Instance, className: string): Instance | undefined;

	FindFirstChildWhichIsA<T extends keyof Instances>(
		this: Instance,
		className: T,
		recursive?: boolean,
	): Instances[T] | undefined;
	FindFirstChildWhichIsA(this: Instance, className: string, recursive?: boolean): Instance | undefined;

	FindFirstAncestorOfClass<T extends Instance["ClassName"]>(
		this: Instance,
		className: T,
	): StrictInstances[T] | undefined;
	FindFirstAncestorOfClass(this: Instance, className: string): Instance | undefined;

	FindFirstChildOfClass<T extends Instance["ClassName"]>(
		this: Instance,
		className: T,
	): StrictInstances[T] | undefined;
	FindFirstChildOfClass(this: Instance, className: string): Instance | undefined;

	GetPropertyChangedSignal(this: Instance, propertyName: GetProperties<this>): RBXScriptSignal;
	GetPropertyChangedSignal(this: Instance, propertyName: string): RBXScriptSignal;
}

interface JointInstance extends Instance {
	Part0?: BasePart;
	Part1?: BasePart;
}

interface Keyframe extends Instance {
	AddPose(this: Keyframe, pose: Pose): void;
	RemovePose(this: Keyframe, pose: Pose): void;
	GetPoses(this: Keyframe): Array<Pose>;
	AddMarker(this: Keyframe, marker: KeyframeMarker): void;
	RemoveMarker(this: Keyframe, marker: KeyframeMarker): void;
	GetMarkers(this: Keyframe): Array<KeyframeMarker>;
}

interface KeyframeSequence extends Instance {
	AddKeyframe(this: KeyframeSequence, keyframe: Keyframe): void;
	GetKeyframes(this: KeyframeSequence): Array<Keyframe>;
	RemoveKeyframe(this: KeyframeSequence, keyframe: Keyframe): void;
}

interface KeyframeSequenceProvider extends Instance {
	RegisterActiveKeyframeSequence(this: KeyframeSequenceProvider, keyframeSequence: KeyframeSequence): string;
	RegisterKeyframeSequence(this: KeyframeSequenceProvider, keyframeSequence: KeyframeSequence): string;
	GetAnimations(this: KeyframeSequenceProvider, userId: number): InventoryPages;
	GetKeyframeSequenceAsync(this: KeyframeSequenceProvider, assetId: string): KeyframeSequence;
}

interface LocalizationService extends Instance {
	GetTranslatorForPlayer(this: LocalizationService, player: Player): Translator;
	GetTranslatorForLocaleAsync(this: LocalizationService, locale: string): Translator;
	GetTranslatorForPlayerAsync(this: LocalizationService, player: Player): Translator;
}

interface LocalizationTable extends Instance {
	GetEntries(this: LocalizationTable): Array<LocalizationEntry>;
	GetTranslator(this: LocalizationTable, localeId: string): Translator;
}

interface LogService extends Instance {
	GetLogHistory(this: LogService): Array<LogInfo>;
}

interface ServiceProvider extends Instance {
	readonly ServiceAdded: RBXScriptSignal<(service: Services[keyof Services]) => void>;
	readonly ServiceRemoving: RBXScriptSignal<(service: Services[keyof Services]) => void>;
	FindService(this: ServiceProvider, className: string): Instance | undefined;
	GetService<T extends keyof Services>(this: ServiceProvider, className: T): Services[T];
	GetService(this: ServiceProvider, className: string): Services[keyof Services] | undefined;
	FindService(this: ServiceProvider, className: string): Services[keyof Services] | undefined;
}

interface CompressorSoundEffect extends SoundEffect {
	SideChain?: Sound | SoundGroup;
}

interface DataModel extends ServiceProvider {
	readonly Workspace: Workspace;
	BindToClose(this: DataModel, callback: () => void): void;
}

interface MarketplaceService extends Instance {
	ProcessReceipt: (receiptInfo: ReceiptInfo) => Enum.ProductPurchaseDecision;
	readonly PromptGamePassPurchaseFinished: RBXScriptSignal<
		(player: Player, gamePassId: number, wasPurchased: boolean) => void
	>;
	readonly PromptPurchaseFinished: RBXScriptSignal<(player: Player, assetId: number, isPurchased: boolean) => void>;
	readonly PromptSubscriptionCancellationFinished: RBXScriptSignal<
		(player: Player, subscriptionId: number, wasCanceled: boolean) => void
	>;
	readonly PromptSubscriptionPurchaseFinished: RBXScriptSignal<
		(player: Player, subscriptionId: number, wasPurchased: boolean) => void
	>;
	GetProductInfo(
		this: MarketplaceService,
		assetId: number,
		infoType: CastsToEnum<Enum.InfoType.Asset>,
	): AssetProductInfo;
	GetProductInfo(
		this: MarketplaceService,
		assetId: number,
		infoType: CastsToEnum<Enum.InfoType.Product>,
	): DeveloperProductInfo;
	GetProductInfo(
		this: MarketplaceService,
		assetId: number,
		infoType: CastsToEnum<Enum.InfoType.GamePass>,
	): AssetProductInfo;
	PromptGamePassPurchase(this: MarketplaceService, player: Player, gamePassId: number): void;
	PromptProductPurchase(
		this: MarketplaceService,
		player: Player,
		productId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	PromptPurchase(
		this: MarketplaceService,
		player: Player,
		assetId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	PlayerOwnsAsset(this: MarketplaceService, player: Player, assetId: number): boolean;
	GetDeveloperProductsAsync(this: MarketplaceService): Pages;
	PromptSubscriptionCancellation(this: MarketplaceService, player: Player, subscriptionId: number): void;
	PromptSubscriptionPurchase(this: MarketplaceService, player: Player, subscriptionId: number): void;
}

interface Model extends PVInstance {
	PrimaryPart?: BasePart;
	GetBoundingBox(this: Model): LuaTuple<[CFrame, Vector3]>;
}

/** @rbxts server */
interface OrderedDataStore extends GlobalDataStore {
	GetSortedAsync(
		this: OrderedDataStore,
		ascending: boolean,
		pagesize: number,
		minValue?: number,
		maxValue?: number,
	): DataStorePages;
}

interface Path extends Instance {
	GetWaypoints(this: Path): Array<PathWaypoint>;
}

interface PathfindingService extends Instance {
	CreatePath(this: PathfindingService, agentParameters?: AgentParameters): Path;
	FindPathAsync(this: PathfindingService, start: Vector3, finish: Vector3): Path;
}

interface PhysicsService extends Instance {
	CollisionGroupContainsPart(this: PhysicsService, name: string, part: BasePart): boolean;
	GetCollisionGroups(this: PhysicsService): Array<CollisionGroupInfo>;
	CollisionGroupContainsPart(this: PhysicsService, name: string, part: BasePart): boolean;
	SetPartCollisionGroup(this: PhysicsService, part: BasePart, name: string): void;
}

interface Plugin extends Instance {
	GetMouse(this: Plugin): PluginMouse;
	CreateDockWidgetPluginGui(
		this: Plugin,
		pluginGuiId: string,
		dockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo,
	): DockWidgetPluginGui;
	CreatePluginAction(
		this: Plugin,
		actionId: string,
		text: string,
		statusTip: string,
		iconName?: string,
		allowBinding?: boolean,
	): PluginAction;
	CreatePluginMenu(this: Plugin, id: string, title?: string, icon?: string): PluginMenu;
	CreateToolbar(this: Plugin, name: string): PluginToolbar;
	ImportFbxRig(this: Plugin, isR15?: boolean): Model;
	Union(this: Plugin, objects: Array<BasePart>): UnionOperation;
}

interface PluginManager extends Instance {
	CreatePlugin(this: PluginManager): Plugin;
}

interface PluginMenu extends Instance {
	AddAction(this: PluginMenu, action: PluginAction): void;
	AddMenu(this: PluginMenu, menu: PluginMenu): void;
	AddNewAction(this: PluginMenu, actionId: string, text: string, icon?: string): PluginAction;
}

interface PluginToolbar extends Instance {
	CreateButton(
		this: PluginToolbar,
		buttonId: string,
		tooltip: string,
		iconname: string,
		text?: string,
	): PluginToolbarButton;
}

interface VehicleSeat extends BasePart {
	Sit(this: VehicleSeat, humanoid: Humanoid): void;
}

interface NetworkClient extends NetworkPeer {
	readonly ConnectionAccepted: RBXScriptSignal<(peer: string, replicator: ClientReplicator) => void>;
}

interface NetworkReplicator extends Instance {
	GetPlayer(this: NetworkReplicator): Player;
}

interface Seat extends Part {
	Sit(this: Seat, humanoid: Humanoid): void;
}

interface SkateboardPlatform extends Part {
	readonly Equipped: RBXScriptSignal<(humanoid: Humanoid, skateboardController: SkateboardController) => void>;
	readonly Unequipped: RBXScriptSignal<(humanoid: Humanoid) => void>;
}

interface Player extends Instance {
	readonly Name: string;
	readonly UserId: number;
	ReplicationFocus: BasePart | undefined;
	readonly CharacterAdded: RBXScriptSignal<(character: Model) => void>;
	readonly CharacterAppearanceLoaded: RBXScriptSignal<(character: Model) => void>;
	readonly CharacterRemoving: RBXScriptSignal<(character: Model) => void>;

	readonly Chatted: RBXScriptSignal<(message: string, recipient?: Player) => void>;
	/** ### TS Usage
	 * One should check the LocationType of each member of this array in order to verify which members are present. Should be compared to the LocationType const enum.
	 */
	GetFriendsOnline(this: Player, maxFriends?: number): Array<FriendOnlineInfo>;
	/** @rbxts server */
	LoadCharacter(this: Player): void;
	/** @rbxts server */
	LoadCharacterWithHumanoidDescription(this: Player, humanoidDescription: HumanoidDescription): void;
	GetMouse(this: Player): PlayerMouse;
	GetJoinData(this: Player): PlayerJoinInfo;
}

/** #### Related methods:
 * - Humanoid.ApplyDescription()
 * - Humanoid.GetAppliedDescription()
 * - Player.LoadCharacterWithHumanoidDescription()
 * - Players.GetHumanoidDescriptionFromOutfitId()
 * - Players.GetHumanoidDescriptionFromUserId()
 */
interface HumanoidDescription extends Instance {}

interface Players extends Instance {
	/** @rbxts client */
	readonly LocalPlayer: Player;
	readonly PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	readonly PlayerRemoving: RBXScriptSignal<(player: Player) => void>;

	GetPlayerByUserId(this: Players, userId: number): Player | undefined;

	GetPlayerFromCharacter(this: Players, character: Model): Player | undefined;
	GetPlayers(this: Players): Array<Player>;

	GetCharacterAppearanceAsync(this: Players, userId: number): Model | undefined;
	GetCharacterAppearanceInfoAsync(this: Players, userId: number): CharacterAppearanceInfo;
	GetFriendsAsync(this: Players, userId: number): FriendPages;

	GetHumanoidDescriptionFromOutfitId(this: Players, outfitId: number): HumanoidDescription;
	GetHumanoidDescriptionFromUserId(this: Players, userId: number): HumanoidDescription;

	GetUserThumbnailAsync(
		this: Players,
		userId: number,
		thumbnailType: CastsToEnum<Enum.ThumbnailType>,
		thumbnailSize: CastsToEnum<Enum.ThumbnailSize>,
	): LuaTuple<[string, boolean]>;

	GetJoinData(this: Players): PlayerJoinInfo;
}

interface ScriptDebugger extends Instance {
	GetGlobals(this: ScriptDebugger): Map<string, any>;
	GetLocals(this: ScriptDebugger, stackFrame?: number): Map<string, any>;
	GetUpvalues(this: ScriptDebugger, stackFrame?: number): Map<string, any>;
}

interface PointsService extends Instance {
	/** This function was once part of the PointService class used to control an ancient achievement system since removed and deprecated. It should not be used in new work. */
	AwardPoints(this: PointsService, userId: number, amount: number): LuaTuple<[number, number, number, 0]>;
}

interface RemoteEvent extends Instance {
	readonly OnClientEvent: RBXScriptSignal<(...arguments: Array<unknown>) => void, true>;
	readonly OnServerEvent: RBXScriptSignal<(player: Player, ...arguments: Array<unknown>) => void>;
	FireAllClients(this: RemoteEvent, ...arguments: Array<unknown>): void;
	FireClient(this: RemoteEvent, player: Player, ...arguments: Array<unknown>): void;
	FireServer(this: RemoteEvent, ...arguments: Array<unknown>): void;
}

interface RemoteFunction extends Instance {
	OnClientInvoke: (...arguments: Array<any>) => void;
	OnServerInvoke: (player: Player, ...arguments: Array<unknown>) => void;
	InvokeClient(this: RemoteFunction, player: Player, ...arguments: Array<any>): unknown;
	InvokeServer<R = unknown>(this: RemoteFunction, ...arguments: Array<unknown>): R;
}

interface RunService extends Instance {
	BindToRenderStep(this: RunService, name: string, priority: number, callback: (deltaTime: number) => void): void;
}

interface Pose extends Instance {
	AddSubPose(this: Pose, pose: Pose): void;
	RemoveSubPose(this: Pose, pose: Pose): void;
}

interface SocialService extends Instance {
	readonly GameInvitePromptClosed: RBXScriptSignal<(senderPlayer: Player, recipientIds: Array<number>) => void>;
	CanSendGameInviteAsync(this: SocialService, targetPlayer: Player): boolean;
	PromptGameInvite(this: SocialService, targetPlayer: Player): void;
}

interface SoundService extends Instance {
	GetListener(
		this: SoundService,
	):
		| [Enum.ListenerType.Camera, undefined]
		| [Enum.ListenerType.CFrame, CFrame]
		| [Enum.ListenerType.ObjectCFrame, BasePart]
		| [Enum.ListenerType.ObjectPosition, BasePart];
	SetListener(this: SoundService, listenerType: CastsToEnum<Enum.ListenerType.Camera>): void;
	SetListener(this: SoundService, listenerType: CastsToEnum<Enum.ListenerType.CFrame>, cframe: CFrame): void;
	SetListener(
		this: SoundService,
		listenerType: CastsToEnum<Enum.ListenerType.ObjectCFrame>,
		basePart: BasePart,
	): void;
	SetListener(
		this: SoundService,
		listenerType: CastsToEnum<Enum.ListenerType.ObjectPosition>,
		basePart: BasePart,
	): void;
	PlayLocalSound(this: SoundService, sound: Sound): void;
}

interface Studio extends Instance {
	Theme: StudioTheme;
}

/** @rbxts server */
interface ServerScriptService {}

/** @rbxts server */
interface ServerStorage {}

interface StarterGui extends BasePlayerGui {
	GetCore<T extends keyof GettableCores>(this: StarterGui, parameter: T): GettableCores[T];
	SetCore<T extends keyof SettableCores>(this: StarterGui, parameter: T, option: SettableCores[T]): void;
}

interface SurfaceGui extends LayerCollector {
	Adornee: BasePart | undefined;
}

interface Team extends Instance {
	readonly PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	readonly PlayerRemoved: RBXScriptSignal<(player: Player) => void>;
	GetPlayers(this: Team): Array<Player>;
}

interface Teams extends Instance {
	GetTeams(this: Teams): Array<Team>;
}

interface TeleportService {
	readonly LocalPlayerArrivedFromTeleport: RBXScriptSignal<
		(loadingGui: ScreenGui | GuiMain, dataTable?: unknown) => void
	>;

	readonly TeleportInitFailed: RBXScriptSignal<
		(player: Player, teleportResult: Enum.TeleportResult, errorMessage: string) => void
	>;
	/** @rbxts server */
	GetPlayerPlaceInstanceAsync(this: TeleportService, userId: number): LuaTuple<[boolean, string, number, string]>;
	/** @rbxts server */
	ReserveServer(this: TeleportService, placeId: number): LuaTuple<[string, string]>;
	/** @rbxts client */
	GetArrivingTeleportGui(this: TeleportService): ScreenGui | GuiMain | undefined;
	/** @rbxts client */
	GetLocalPlayerTeleportData(this: TeleportService): unknown;
	/** @rbxts client */
	GetTeleportSetting(this: TeleportService, setting: string): unknown;
	/** @rbxts client */
	SetTeleportGui(this: TeleportService, gui: ScreenGui): void;
	/** @rbxts client */
	SetTeleportSetting(this: TeleportService, setting: string, value: TeleportData): void;
	Teleport(
		this: TeleportService,
		placeId: number,
		player?: Player,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui | GuiMain,
	): void;

	TeleportToPrivateServer(
		this: TeleportService,
		placeId: number,
		reservedServerAccessCode: string,
		players: Array<Player>,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui | GuiMain,
	): void;

	TeleportPartyAsync(
		this: TeleportService,
		placeId: number,
		players: Array<Player>,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui | GuiMain,
	): string;

	TeleportToPlaceInstance(
		this: TeleportService,
		placeId: number,
		instanceId: string,
		player?: Player,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui | GuiMain,
	): void;

	TeleportToSpawnByName(
		this: TeleportService,
		placeId: number,
		spawnName: string,
		player?: Player,
		teleportData?: any,
		customLoadingScreen?: ScreenGui | GuiMain,
	): void;
}

interface Terrain extends BasePart {
	CopyRegion(this: Terrain, region: Region3int16): TerrainRegion;
	PasteRegion(this: Terrain, region: TerrainRegion, corner: Vector3int16, pasteEmptyCells: boolean): void;
	ReadVoxels(
		this: Terrain,
		region: Region3,
		resolution: number,
	): LuaTuple<[ReadVoxelsArray<Enum.Material>, ReadVoxelsArray<number>]>;
	WriteVoxels(
		this: Terrain,
		region: Region3,
		resolution: number,
		materials: Array<Array<Array<CastsToEnum<Enum.Material>>>>,
		occupancy: Array<Array<Array<number>>>,
	): void;
}

interface Tool extends BackpackItem {
	readonly Equipped: RBXScriptSignal<(mouse: Mouse) => void>;
}

interface UIPageLayout extends UIGridStyleLayout {
	readonly PageEnter: RBXScriptSignal<(page: GuiObject) => void>;
	readonly PageLeave: RBXScriptSignal<(page: GuiObject) => void>;
	readonly Stopped: RBXScriptSignal<(currentPage: GuiObject) => void>;
	JumpTo(this: UIPageLayout, page: GuiObject): void;
}

interface Explosion extends Instance {
	readonly Hit: RBXScriptSignal<(part: BasePart, distance: number) => void>;
}

interface Dragger extends Instance {
	MouseDown(this: Dragger, mousePart: BasePart, pointOnMousePart: Vector3, parts: Array<BasePart>): void;
}
interface JointsService extends Instance {
	SetJoinAfterMoveInstance(this: JointsService, joinInstance: PVInstance): void;
	SetJoinAfterMoveTarget(this: JointsService, joinTarget: PVInstance): void;
}

interface GuiButton extends GuiObject {
	readonly Activated: RBXScriptSignal<(inputObject: InputObject) => void>;
}

interface TextBox extends GuiObject {
	readonly FocusLost: RBXScriptSignal<(enterPressed: boolean, inputThatCausedFocusLoss: InputObject) => void>;
}

interface TweenService {
	Create<T extends Instances[keyof Instances]>(
		this: TweenService,
		instance: T,
		tweenInfo: TweenInfo,
		propertyTable: Partial<FilterMembers<T, Tweenable>>,
	): Tween;
}

/** @rbxts client */
interface UserInputService {
	readonly InputBegan: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly InputChanged: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly InputEnded: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TextBoxFocusReleased: RBXScriptSignal<(textboxReleased: TextBox) => void>;
	readonly TextBoxFocused: RBXScriptSignal<(textboxFocused: TextBox) => void>;
	readonly TouchEnded: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchMoved: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<InputObject>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchRotate: RBXScriptSignal<
		(
			touchPositions: Array<InputObject>,
			rotation: number,
			velocity: number,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchPinch: RBXScriptSignal<
		(
			touchPositions: Array<InputObject>,
			scale: number,
			velocity: number,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchLongPress: RBXScriptSignal<
		(touchPositions: Array<InputObject>, state: Enum.UserInputState, gameProcessedEvent: boolean) => void
	>;
	readonly TouchStarted: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchTap: RBXScriptSignal<(touchPositions: Array<InputObject>, gameProcessedEvent: boolean) => void>;
	readonly DeviceAccelerationChanged: RBXScriptSignal<(acceleration: InputObject) => void>;
	readonly DeviceGravityChanged: RBXScriptSignal<(gravity: InputObject) => void>;
	readonly DeviceRotationChanged: RBXScriptSignal<(rotation: InputObject, cframe: CFrame) => void>;
	GetConnectedGamepads(this: UserInputService): Array<Enum.UserInputType>;
	GetDeviceRotation(this: UserInputService): LuaTuple<[InputObject, CFrame]>;
	GetGamepadState(this: UserInputService, gamepadNum: CastsToEnum<Enum.UserInputType>): Array<InputObject>;
	GetKeysPressed(this: UserInputService): Array<InputObject>;
	GetMouseButtonsPressed(this: UserInputService): Array<InputObject>;
	GetNavigationGamepads(this: UserInputService): Array<Enum.UserInputType>;
	GetSupportedGamepadKeyCodes(
		this: UserInputService,
		gamepadNum: CastsToEnum<Enum.UserInputType>,
	): Array<Enum.KeyCode>;
	GetDeviceAcceleration(this: UserInputService): InputObject;
	GetDeviceGravity(this: UserInputService): InputObject;
	GetFocusedTextBox(this: UserInputService): TextBox | undefined;
}

interface WorldRoot extends Model {
	FindPartOnRay(
		this: WorldRoot,
		ray: Ray,
		ignoreDescendantsInstance?: Instance,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartOnRayWithIgnoreList(
		this: WorldRoot,
		ray: Ray,
		ignoreDescendantsTable: Array<Instance>,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartOnRayWithWhitelist(
		this: WorldRoot,
		ray: Ray,
		whitelistDescendantsTable: Array<Instance>,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartsInRegion3(
		this: WorldRoot,
		region: Region3,
		ignoreDescendantsInstance?: Instance,
		maxParts?: number,
	): Array<BasePart>;

	FindPartsInRegion3WithIgnoreList(
		this: WorldRoot,
		region: Region3,
		ignoreDescendantsTable: Array<Instance>,
		maxParts?: number,
	): Array<BasePart>;

	FindPartsInRegion3WithWhiteList(
		this: WorldRoot,
		region: Region3,
		whitelistDescendantsTable: Array<Instance>,
		maxParts?: number,
	): Array<BasePart>;
}

interface Workspace extends WorldRoot {
	/** Do not use `Workspace.BreakJoints`. Use a for-loop instead */
	BreakJoints: any;
	/** Do not use `Workspace.MakeJoints`. Use a for-loop instead */
	MakeJoints: any;
	Terrain: Terrain;
}

/**
 * Used to hold a value.
 */
interface ValueBase extends Instance {
	/** The value this object holds. */
	Value?: unknown;
	/**
	 * This event fires whenever the `Value` property is changed.
	 *
	 * This event can be used to track when a ValueBase `Value` changes and to track the different values that it may change to.
	 */
	readonly Changed: RBXScriptSignal<(value?: unknown) => void>;
}

interface ObjectValue extends ValueBase {
	readonly Changed: RBXScriptSignal<(value?: Instance) => void>;
}
